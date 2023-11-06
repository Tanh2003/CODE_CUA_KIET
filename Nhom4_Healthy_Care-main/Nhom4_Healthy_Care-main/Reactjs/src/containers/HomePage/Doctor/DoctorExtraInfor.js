import React, { Component } from "react";
import "./DoctorExtraInfor.scss";
import { connect } from "react-redux";

import { LANGUAGES } from "../../../utils";
import { getScheduleDoctorByDate } from "../../../services/userService";

class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
isShowDetailInfor:false
    };
  }

  async componentDidMount() {
    // Các thao tác bạn muốn thực hiện khi component được tạo
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
      // Xử lý khi ngôn ngữ thay đổi
    }
  }

  showHideDetailInfor=(status)=>{
    this.setState({
        isShowDetailInfor:status
    })
  }

  render() {
    let {isShowDetailInfor}=this.state;
    return (
      <div className="doctor-extra-infor-container">
        <div className="content-up">
            <div className="text-address"> ĐỊA CHỈ KHÁM</div>
            <div className="name-clinic">Phòng khám Bệnh viện Đại học Y Dược 1</div>
            <div className="detail-address"> 20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM</div>


        </div>
        <hr/>
        <div className="content-down">
            {isShowDetailInfor===false&&
            <div className="short-infor">
            GIÁ KHÁM: 250.000đ
            <span onClick={()=>this.showHideDetailInfor(true)}>Xem chi tiết</span>
            </div>
            
            }

{isShowDetailInfor===true&&
<>
<div className="title-price">GIA KHAM: .</div>
<dic className="detail-infor">
    <dic className='price'>
        <span className="left"> Gia kham</span>
        <span className="right"> 250.000d</span>
    </dic>
    <div className="note"> shadsahdasdhasgdasdsajhdasjdhajsdgsajd</div>

    
</dic>
<div className="payment">dhbdhsacshcascbasbcahsbasbcabscascsbacc</div>
<div className="hide-price">
<span onClick={()=>this.showHideDetailInfor(false)}>ẩn bảng giá</span>

</div>
</>
}
                </div>
            
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
