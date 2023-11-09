import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "reactstrap";
import {getProfileDoctorById} from "../../../services/userService";
import { NumericFormat } from 'react-number-format';
import { LANGUAGES } from "../../../utils/constant";




class ProfileDoctor extends Component {
  constructor(props) {
    super(props);

    this.state = {
     dataProfile:{}
    };
  }
  async componentDidMount() {
  let data = await this.getInforDoctor(this.props.doctorId);
  this.setState({
    dataProfile:data
  })

 
  }
  getInforDoctor= async (id)=>{
    let result={};
    if (id){
      let res=await getProfileDoctorById(id);
      if(res&&res.errcode===0){
        result=res.data
      }
    }
    return result;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
let {dataProfile}=this.state;
let { language } = this.props;
let nameVi = "",
nameEn = "";
if(dataProfile && dataProfile.positionData){
  nameVi=`${dataProfile.positionData.valueVi},${dataProfile.lastName} ,${dataProfile.firstName}`;
  nameEn=`${dataProfile.positionData.valueEn},${dataProfile.lastName} ,${dataProfile.firstName}`;
}


    return (
      <>
     <div className="profile-doctor-container">
      <div className="intro-doctor">
      <div
              className="content-left"
              style={{
                backgroundImage: `url(${
                  dataProfile && dataProfile.image ? dataProfile.image : ""
                })`,
              }}
            ></div>
             <div className="content-right">
              <div className="up">
                {language === LANGUAGES.VI ? nameVi : nameEn}
              </div>
              <div className="down">
                {dataProfile.Markdown && dataProfile.Markdown.description && (
                  <span>{dataProfile.Markdown.description}</span>
                )}
              </div>
            </div>

            <div className="price">
              Giá khám:
           
         {dataProfile&&dataProfile.Doctor_Infor&&<NumericFormat className="currency"
            value={dataProfile.Doctor_Infor.priceTypeData.valueVi}
            displayType={'text'}
            thousandSeparator={true}
            suffix={'VND'} />}

            </div>

            

      </div>
     </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);
