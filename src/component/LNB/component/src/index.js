import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import $ from 'jquery';

function UseJquery() {
  useEffect(() => {
    
    /* COLLAPSE MENU */
    $('.mainlink').on('click', function() {
      const collapseMenu = $(this).next('.collapse_menu');
      collapseMenu.toggleClass('showCollapse');
      $('.collapse_menu').not(collapseMenu).removeClass('showCollapse');
    });

    const handleMainLinkClick = (event) => {
      $(event.target).css("background", "linear-gradient(271.53deg, rgba(52, 55, 72, 0.6) 0.22%, rgba(84, 90, 106, 0.6) 100%)");
      $(".mainlink").not(event.target).css("background", "none");
    };

    const handleCollapseSublinkClick = (event) => {
      $(event.target).css("font-weight", "700");
      $(".collapse_sublink").not(event.target).css("font-weight", "300");
    };

    // Add event listeners when the component mounts
    $('.mainlink').on('click', handleMainLinkClick);
    $('.collapse_sublink').on('click', handleCollapseSublinkClick);

    // Clean up event listeners when the component unmounts
    return () => {
      $('.mainlink').off('click', handleMainLinkClick);
      $('.collapse_sublink').off('click', handleCollapseSublinkClick);
    };
  }, []);

  return (
    <div>
      <nav className="LNB">
        <div className="Category">
          <div href="#">
            <span className="mainlink">Category Title</span>
            <ul className="collapse_menu">
              <a href="#" className="collapse_sublink">Sm_title</a>
              <a href="#" className="collapse_sublink">Sm_title</a>
              <a href="#" className="collapse_sublink">Sm_title</a>
            </ul>
          </div>
        </div>

        <div className="Category">
          <div href="#">
            <span className="mainlink">Category Title</span>
            <ul className="collapse_menu">
              <a href="#" className="collapse_sublink">Sm_title</a>
              <a href="#" className="collapse_sublink">Sm_title</a>
              <a href="#" className="collapse_sublink">Sm_title</a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

ReactDOM.render(<UseJquery />, document.getElementById('root'));

export default UseJquery;
