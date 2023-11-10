import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManagerPatient.scss";
import DatePicker from "../../../components/Input/DatePicker";







class ManagerPatient extends Component {
    constructor(props){
    super(props);
    this.state={
        currentDate: new Date(),
    }
    
}
componentDidMount() {
        
}
        
handleOnChangeDatePicker=(date)=>{
  this.setState({
currentDate:date[0]
  })
}
 
  render() {
   
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
                        <th>Email</th>
                        <th>Họ</th>
                        <th>Tên</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>

                        <th>Hành động</th>

                      </tr>
                
                        
                                    <tr> 
                                        
                                        
                                        <td>
                                            <button className='btn-edit'
                                          
                                            ><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete'
                                          ><i className="fas fa-trash"></i></button>
                                        </td>
                                      

                                    </tr>
                               
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

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManagerPatient));
