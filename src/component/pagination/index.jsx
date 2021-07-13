import React from 'react';
import styles from '../../styles/components/Pagination.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({active=2}) => {
    const list = [1,2,3,4,5,6]
    return  <div
    className={`${styles.blog_pagination} blog-pagination text-center`}
  >
    <a href="#0">
      <i>
        <FontAwesomeIcon icon={faAngleLeft} />
      </i>
    </a>
    {list.map((item, index)=> {
        return     <a href="#0" key={`${index}`} className={active === index? styles.active : ''}> {item} </a>
    })}
    <a href="#0">
      <i>
        <FontAwesomeIcon icon={faAngleRight} />
      </i>
    </a>{" "}
  </div>
}

export default Pagination