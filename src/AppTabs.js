import React from "react";
import { NavLink } from "react-router-dom";
import "./AppTabs.css";
export default function AppTabs() {
  return (
    <div className="AllTabs">
      <nav
        style={{
          // marginTop: "15px",
          marginLeft: "3%",
          zIndex: 1,
          position: "relative"
        }}>
        <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051",
            paddingRight: "2%"
          }}
          className="HomeTab"
          activeClassName="ActiveHomeTab"
          exact
          id="HomeTab"
          to="/">
          <font
            //size="6"
            face="FuturaItalicBold"
            // style={{ backgroundColor: "#e8f6fa" }}
          >
            Home
          </font>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051",
            paddingRight: "2%"
          }}
          activeClassName="ActiveAboutUsTab"
          id="AboutUsTab"
          to="/AboutUs">
          <font
            //size="6"
            face="FuturaItalicBold"
            // style={{ backgroundColor: "#e8f6fa" }}
          >
            About
          </font>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051",
            paddingRight: "2%"
          }}
          activeClassName="ActiveCampaignTab"
          exact
          id="CampaignTab"
          to="/Campaign">
          <font
            //size="6"
            face="FuturaItalicBold"
            // style={{ backgroundColor: "#e8f6fa" }}
          >
            Campaign
          </font>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051",
            paddingRight: "2%"
          }}
          activeClassName="ActiveCampaignTab"
          exact
          id="EndorsementTab"
          to="/Endorsement">
          <font
            //size="6"
            face="FuturaItalicBold"
            // style={{ backgroundColor: "#e8f6fa" }}
          >
            Endorsements
          </font>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051",
            paddingRight: "2%"
          }}
          activeClassName="ActiveCampaignTab"
          exact
          id="ContactUsTab"
          to="/ContactUs">
          <font
            //size="6"
            face="FuturaItalicBold"
            // style={{ backgroundColor: "#e8f6fa" }}
          >
            Contact
          </font>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051",
            paddingRight: "2%"
          }}
          activeClassName="ActiveGalleryTab"
          exact
          id="GalleryTab"
          to="/Gallery">
          <font
            //size="6"
            face="FuturaItalicBold"
            // style={{ backgroundColor: "#e8f6fa" }}
          >
            Gallery
          </font>
        </NavLink>

        <NavLink
          style={{
            textDecoration: "none",
            color: "#f79051",
            paddingRight: "2%"
          }}
          activeClassName="ActiveCOVIDTab"
          exact
          id="COVIDTab"
          to="/COVID19">
          <font
            // size="6"
            face="FuturaItalicBold"
            // style={{ backgroundColor: "#e8f6fa" }}
          >
            COVID
          </font>
        </NavLink>
      </nav>
    </div>
  );
}
