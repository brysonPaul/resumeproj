import React from 'react';
//import Resume from "../images/Resume.pdf";

function Social() {
    return (
        <div className="social" style={{ position: 'absolute', top: 0, right: 0 }}>
            <a className="icon-links" href="https://www.linkedin.com/in/bryson-paul/">
                <i className="fa fa-brands fa-linkedin" title="View my LinkedIn"></i>
            </a>
            {/* <a className="icon-links" href={Resume} target="_blank" rel="noopener noreferrer" type="application/pdf">
                <i className="fa fa-fw fa-file" title="View my resume"></i>
            </a> */}
            <a className="icon-links" href="mailto:brysonpaul1870@gmail.com" target="_blank" rel="noopener noreferrer" type="application/pdf">
                <i className="fa fa-fw fa-envelope" title="Send me an email"></i>
            </a>
        </div>
    );
}

export default Social;
