import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManagerPatient.scss";
import DatePicker from "../../../components/Input/DatePicker";
import {getAllPatientForDoctor} from "../../../services/userService";
import moment from "moment/moment";






class ManagerPatient extends Component {
    constructor(props){
    super(props);
    this.state={
        currentDate: moment(new Date()).startOf('day').valueOf(),
        dataPatient:[]
    }
    
}
async componentDidMount() {
        let {user}=this.props;
        let{currentDate}=this.state;
        let formatedDate=new Date(currentDate).getTime();
        this.getDataPatient(user,formatedDate)
}




getDataPatient = async (user, formatedDate) =>
 {
      let res = await getAllPatientForDoctor
      ({ doctorId: user.id,
         date: formatedDate
       })

    if (res && res.errCode === 0)
        { this.setState({
          dataPatient: res.data
        })

    }
  }












        
handleOnChangeDatePicker=(date)=>{
  this.setState({
currentDate:date[0]
  },()=>{
    let {user}=this.props;
    let{currentDate}=this.state;
    let formatedDate=new Date(currentDate).getTime();
    this.getDataPatient(user,formatedDate)


  })
}

handleBtnComfirm=()=>{

}

handleBtnRemedy=()=>{

}
 
  render() {
    let {dataPatient}=this.state;
   
    return (
     <>
     
     <div className='title text-center'>
                   Danh sách tài khoản
                </div>
                <div>
                <label>Chọn ngày khám</label>
                <DatePicker
               
onChange={this.handleOnChangeDatePicker}
className="form-control"
value={this.state.currentDate}
/>
                   
                </div>
                <div className='users-table mt-4 mx-3'>
                <table id="customers">
                <tbody>
                      <tr>
                        <th>STT</th>
                        <th>Thời gian</th>
                        <th>Họ và tên </th>
                        <th>Địa chỉ</th>
                        <th>Giới tính</th>
                        <th>Hành động</th>

                      </tr>
                
                        {
                          dataPatient&&dataPatient.length>0?
                            dataPatient&&dataPatient.map((item,index)=>{
                             
                                return(
                                    <tr key={index}> 
                                        <td>{index+1}</td>
                                        <td>{item.timeTypeDataPatient.valueVi}</td>
                                        <td>{item.patientData.firstName}</td>
                                        
                                        <td>{item.patientData.address}</td>
                                        <td>{item.patientData.genderData.valueVi}</td>
                                        
                                        <td>
                                            <button className='btn-edit'
                                            onClick={()=>{
                                                this.handleBtnComfirm(item)
                                            }}
                                            >Xác nhận</button>
                                            <button className='btn-delete'
                                            onClick={()=>{
                                               this.handleBtnRemedy(item)

                                            }}>Gửi hóa đơn</button>
                                        </td>
                                      

                                    </tr>
                                )

                            })
                            :
                            <tr>
                              Không có dữ liệu
                            </tr>   
                     

                        }
                   </tbody>    
                      

                </table>
              


                </div>
     </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user.userInfo,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManagerPatient));
