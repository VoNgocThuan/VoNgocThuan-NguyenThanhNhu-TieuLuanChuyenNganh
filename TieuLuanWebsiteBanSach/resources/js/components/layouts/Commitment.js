import React, { Component } from 'react';

class Commitment extends Component {
    render() {
        return (
            <div className="commitment">
                    <div className="contentCommitment">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="itemCommitment">
                                        <div className="boxIconCommitment">
                                            <div className="imgIconCommitment">
                                                <img src="/images/iconchat.png" alt=""/>
                                            </div>
                                        </div>
                                        <h3>Hỗ trợ khách hàng</h3>
                                        <p>Hãy liên hệ với chúng tôi để được hỗ trợ 24/7</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="itemCommitment">
                                        <div className="boxIconCommitment">
                                            <div className="imgIconCommitment">
                                                <img src="/images/iconcheck.png" alt=""/>
                                            </div>
                                        </div>
                                        <h3>Chất lượng đảm bảo</h3>
                                        <p>Bảo hành từ 12 đến 24 tháng</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="itemCommitment">
                                        <div className="boxIconCommitment">
                                            <div className="imgIconCommitment">
                                                <img src="/images/icongiaohang.png" alt=""/>
                                            </div>
                                        </div>
                                        <h3>Đổi trả dễ dàng</h3>
                                        <p>Miễn phí đổi trả trong vòng 15 ngày</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>           
        );
    }
}

export default Commitment;
