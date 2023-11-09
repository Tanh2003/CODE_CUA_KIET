import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "reactstrap";
import "./BookingModal.scss";
import ProfileDoctor from "./ProfileDoctor";
import _ from 'lodash';




class BookingModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }
   componentDidMount() {
  
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
   let {isOpenModal,closeBookingClose,dataTime}=this.props;
   let doctorId='';
   if(dataTime&&!_.isEmpty(dataTime)){
    doctorId=dataTime.doctorId
   }

    return (
      <>
      <Modal
      isOpen={isOpenModal}
      className={"booking-modal-container"}
      size="lg"
      centered
      >

      <div className="booking-modal-content">
        <div className="booking-modal-header">
            <span className="left">
Thông tin đặt lịch khám bệnh
            </span>
            <span
            className="right"
            onClick={closeBookingClose}
            >
                <i className="fas fa-times"></i>

            </span>
        </div>
        <div className="booking-modal-body">
<div className="doctor-infor">
<ProfileDoctor
doctorId={doctorId}
/>
</div>

<div className="row">
<div className="col-6 from-group">
<label>Họ tên: </label>
<input className="form-control"/>
</div>
<div className="col-6 from-group">
<label>Số điện thoại: </label>
<input className="form-control"/>
</div>
<div className="col-6 from-group">
<label>Địa chỉ Email</label>
<input className="form-control"/>
</div>
<div className="col-6 from-group">
<label>Địa chỉ liên hệ</label>
<input className="form-control"/>
</div>
<div className="col-6 from-group">
<label>lý do khám</label>
<input className="form-control"/>
</div>
<div className="col-6 from-group">
<label>Đặt cho ai</label>
<input className="form-control"/>
</div>
<div className="col-6 from-group">
<label>Giới tính</label>
<input className="form-control"/>
</div>

</div>
        </div>

        <div className="booking-modal-footer">
            <button className="btn-booking-confirm"
            onClick={closeBookingClose}
            >Xác nhận</button>
             <button className="btn-booking-cancel"
            onClick={closeBookingClose}
            >Cancel</button>


        </div>
      </div>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);