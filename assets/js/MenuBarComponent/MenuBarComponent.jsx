/*
 * Copyright 2021 HANCOM Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import MediaQuery from "react-responsive";

// for hugo integration ---
// TODO: better handling of svg file paths
import * as params from '@params';

const baseURL = params.baseURL || "/";
const ic_github = `${baseURL}images/MenuBarComponent/ic_github.svg`;
const ic_slide_menu_github = `${baseURL}images/MenuBarComponent/ic_slide_menu_github.svg`;
// ---

const MANUAL_URL = "https://manual.apps.blackwhale.cloud.hancom.com/";
const BLOG_URL = "https://hancom-io.github.io/silver-broccoli-urban-fiesta/";
const COMMUNITY_URL = "https://community.developer.hancom.com/";
const GITHUB_URL = "https://github.com/hancom-io";

export default function MenuBarComponent() {

  function handleMenuButtonClick() {
    document.querySelector(".menu_bar_slide_menu").className =
      "menu_bar_slide_menu on";
    document.querySelector(".body_opacity").className = "body_opacity on";
  }

  function handleBodyOpacityClick() {
    document.querySelector(".menu_bar_slide_menu").className =
      "menu_bar_slide_menu";
    document.querySelector(".body_opacity").className = "body_opacity";
  }

  const changeMenuBarColor = () => {
    // 화면 Y축 상단값
    if (window.scrollY < 1) {
      document.querySelector(".menu_bar").className = "menu_bar";
    } else {
      document.querySelector(".menu_bar").className = "menu_bar scroll";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeMenuBarColor);
    window.addEventListener("resize", changeMenuBarColor);
    return () => {
      window.removeEventListener("scroll", changeMenuBarColor);
      window.removeEventListener("resize", changeMenuBarColor);
    };
  });

  return (
    <React.Fragment>
      <MediaQuery minWidth={1024}>
        <div id="menu_bar_common_attributes" className="menu_bar">
          <div id="menu_bar_box_common_attributes" className="menu_bar_box">
            <div
              id="menu_bar_logo_common_attributes"
              className="menu_bar_logo"
              onClick={() => (window.location.href = "/")}
            />
            <ul className="menu_bar_link_list">
              <li>
                <a
                  id="api"
                  className="menu_bar_link"
                  href={MANUAL_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  개발매뉴얼
                </a>
              </li>
              <li>
                <a
                  id="blog"
                  className="menu_bar_link"
                  href={BLOG_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  블로그
                </a>
              </li>
              <li>
                <a
                  id="community"
                  className="menu_bar_link"
                  href={COMMUNITY_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  커뮤니티
                </a>
              </li>
              <li>
                <a
                  id="github"
                  className="menu_bar_link"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="menu_bar_link_github_logo"
                    src={ic_github}
                    alt="ic_github"
                  />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1023}>
        <div id="menu_bar_common_attributes" className="menu_bar">
          <div
            id="menu_bar_menu_button_common_attributes"
            className="menu_bar_menu_button"
            onClick={handleMenuButtonClick}
          />
          <div
            id="menu_bar_logo_common_attributes"
            className="menu_bar_logo_small"
            onClick={() => (window.location.href = "/")}
          />
          <div className="body_opacity" onClick={handleBodyOpacityClick} />
          <div className="menu_bar_slide_menu">
            <div
              id="menu_bar_slide_menu_logo_common_attributes"
              className="menu_bar_slide_menu_logo"
            />
            <div
              id="menu_bar_slide_menu_link_container_common_attributes"
              className="menu_bar_slide_menu_link_container"
            >
              <div
                id="menu_bar_slide_menu_link_box_common_attributes"
                className="menu_bar_slide_menu_link_box"
                onClick={() => window.open(MANUAL_URL, "_blank")}
              >
                <div className="menu_bar_slide_menu_link">개발매뉴얼</div>
              </div>
              <div
                id="menu_bar_slide_menu_line_common_attributes"
                className="menu_bar_slide_menu_line"
              />
              <div
                id="menu_bar_slide_menu_link_box_common_attributes"
                className="menu_bar_slide_menu_link_box"
                onClick={() => window.open(BLOG_URL, "_blank")}
              >
                <div className="menu_bar_slide_menu_link">블로그</div>
              </div>
              <div
                id="menu_bar_slide_menu_line_common_attributes"
                className="menu_bar_slide_menu_line"
              />
              <div
                id="menu_bar_slide_menu_link_box_common_attributes"
                className="menu_bar_slide_menu_link_box"
                onClick={() => window.open(COMMUNITY_URL, "_blank")}
              >
                <div className="menu_bar_slide_menu_link">커뮤니티</div>
              </div>
              <div
                id="menu_bar_slide_menu_line_common_attributes"
                className="menu_bar_slide_menu_line"
              />
              <div
                id="menu_bar_slide_menu_link_box_common_attributes"
                className="menu_bar_slide_menu_link_box"
                onClick={() => window.open(GITHUB_URL, "_blank")}
              >
                <div className="menu_bar_slide_menu_github_link_grid">
                  <img
                    className="menu_bar_slide_menu_link_github_logo"
                    src={ic_slide_menu_github}
                    alt="ic_slide_menu_github"
                  />
                  <div
                    className="menu_bar_slide_menu_link"
                    style={{ top: "0px", position: "relative" }}
                  >
                    GitHub
                  </div>
                </div>
              </div>
              <div
                id="menu_bar_slide_menu_line_common_attributes"
                className="menu_bar_slide_menu_line"
              />
            </div>
          </div>
        </div>
      </MediaQuery>
    </React.Fragment>
  );
}

// for hugo integration ---
const domContainer = document.querySelector('#menu_bar_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<MenuBarComponent />);
// ---
