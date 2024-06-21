import React from "react";
import { HeaderStyles, LogoStyles } from "./Header.style";

const Header = () => {
  const userToggle = () => {
    const user = document.querySelector(".user");
    if (!user.classList.contains("on")) {
      user.classList.add("on");
    }
  };

  return (
    <>
      <HeaderStyles>
        <LogoStyles>
          <h1 className="logo">
            <a href="">
              <img src="../assets/images/logo.svg" alt="" />
            </a>
          </h1>
        </LogoStyles>

        <nav className="nav">
          <a href="" className="nav_btn">
            데이터베이스
          </a>
          <a href="library_dashboard_002.html" className="nav_btn">
            소재라이브러리
          </a>
        </nav>
        <div className="srch">
          <div className="select-box ty_small">
            <input type="text" className="select-input" value="매체" readOnly />
            <ul className="options">
              <li data-value="1" className="option">
                매체
              </li>
              <li data-value="2" className="option">
                상품
              </li>
            </ul>
          </div>
          <input
            type="text"
            className="srch_input"
            placeholder="찾고 싶은 매체/상품을 검색해보세요!"
          />
          <button type="submit" className="srch_btn"></button>
          <span className="line"></span>

          <div className="srch_result">
            <ul className="srch_list">
              <li className="srch_list_item">
                <div className="mediaSet">
                  <span className="mediaSet_ico "></span>
                  <div className="mediaSet_txt">
                    <div>
                      <span className="tit t_hidden_1 ">스노우</span>
                    </div>
                  </div>
                  <div className="mediaSet_tag">
                    <span className="tag _beauty">뷰티</span>
                    <span className="tag _university">Z세대</span>
                  </div>
                </div>
              </li>
              <li className="srch_list_item">
                <div className="mediaSet">
                  <span className="mediaSet_ico "></span>
                  <div className="mediaSet_txt">
                    <div>
                      <span className="tit t_hidden_1 ">스노우</span>
                    </div>
                  </div>
                  <div className="mediaSet_tag">
                    <span className="tag _beauty">뷰티</span>
                  </div>
                </div>
              </li>
              <li className="srch_list_item">
                <div className="mediaSet">
                  <span className="mediaSet_ico "></span>
                  <div className="mediaSet_txt">
                    <div>
                      <span className="tit t_hidden_1 ">스노우</span>
                    </div>
                    <div>
                      <span className="desc t_hidden_1 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Assumenda, expedita.
                      </span>
                    </div>
                  </div>
                  <div className="mediaSet_tag">
                    <span className="tag _sns">CPM 배너</span>
                  </div>
                </div>
              </li>
              <li className="srch_list_item">
                <div className="mediaSet">
                  <span className="mediaSet_ico "></span>
                  <div className="mediaSet_txt">
                    <div>
                      <span className="tit t_hidden_1 ">스노우</span>
                    </div>
                    <div>
                      <span className="desc t_hidden_1 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Assumenda, expedita.
                      </span>
                    </div>
                  </div>
                  <div className="mediaSet_tag">
                    <span className="tag _sns">CPM 배너</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="no_result">
              <img src="../assets/images/no_result.svg" alt="" />
              <div className="desc fz_5 fc_grey">
                조건에 맞는 결과가 없어요 <br /> 검색어를 수정해주세요
              </div>
            </div>
          </div>
          {/* <!-- [D][개발시 삭제] UI 확인용 스크립트 -->
                <script>
                    const srch_btn = document.querySelector('.srch_btn');
                    const srch_result = document.querySelector('.srch_result');
                    srch_btn.addEventListener('click', (event)=>{
                        srch_result.classNameList.add('on');
                    });

                </script>
                <!--// [D][개발시 삭제] UI 확인용 스크립트 --> */}
        </div>
        <div className="user ex_close">
          <button
            type="button"
            className="user_ico"
            onClick={userToggle}
          ></button>
          <div className="user_cont ">
            <div className="user_info d_flex fw_w ai_c _gapX8 _gapY4">
              <div className="user_name fz_4 fwB">김하나</div>
              <div className="user_status tag _subscribe">구독중</div>
              <div className="user_mail w100 fz_3 fc_grey">hana@fym.im</div>
            </div>
            <ul className="user_menu">
              <li>
                <a href="" className="user_menu_btn hv">
                  로그인
                </a>
              </li>
              <li>
                <a href="" className="user_menu_btn hv">
                  회원가입
                </a>
              </li>
              <li>
                <a href="" className="user_menu_btn hv">
                  마이페이지
                </a>
              </li>
              <li>
                <a href="" className="user_menu_btn hv">
                  매체 등록/수정 요청
                </a>
              </li>
              <li>
                <a href="" className="user_menu_btn hv">
                  로그아웃
                </a>
              </li>
            </ul>
          </div>
        </div>
      </HeaderStyles>
    </>
  );
};

export default Header;
