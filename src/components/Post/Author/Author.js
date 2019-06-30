// @flow
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <br /> 
        {'Full-Stack '} 
        <a
          href={getContactHref('rss', author.contacts.rss)} >
          Admin Dashboards
        </a> - provided by <a href="https://appseed.us/?ref=admin-dashboards">AppSeed</a>

      </p>
    </div>
  );
};

export default Author;
