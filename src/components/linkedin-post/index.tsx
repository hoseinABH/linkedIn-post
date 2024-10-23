import { useState } from 'react';
import styles from './index.module.scss';
import {
  CloseIcon,
  CommentIcon,
  DotsIcon,
  EarthIcon,
  LikeIcon,
  RepostIcon,
  SendIcon,
} from '../icons';

export default function LinkedInPost() {
  const [expandContent, setExpandContent] = useState(false);
  function showMore() {
    setExpandContent(true);
  }
  return (
    <div className={styles['post']}>
      {/* POST HEADER */}
      <div className={styles['post__header']}>
        {/* POST AUTHOR */}
        <div className={styles['post__author']}>
          <img
            className={styles['post__author__avatar']}
            src="/avatar.jfif"
            alt="avatar"
          />
          <div className={styles['post__author__info']}>
            <span className={styles['post__author__name']}>
              Hosein Abolhasani
            </span>
            <span className={styles['post__author__subtitle']}>
              Software Engineer
            </span>
            <span className={styles['post__author__date']}>
              2d •
              <EarthIcon />
            </span>
          </div>
        </div>
        {/* POST AUTHOR */}

        {/* POST HEADER ACTIONS */}
        <div className={styles['post__header__actions']}>
          <div className={styles['icon-button']}>
            <DotsIcon />
          </div>
          <div className={styles['icon-button']}>
            <CloseIcon />
          </div>
        </div>
        {/* POST HEADER ACTIONS */}
      </div>
      {/* POST HEADER */}
      {/* POST BODY */}
      <div className={styles['post__body']}>
        <p className={styles['post__body__text']}>
          Vite (French word for "quick", pronounced /vit/, like "veet") is a
          build tool that aims to provide a faster and leaner development
          experience for modern web projects. It consists of two major parts: A
          dev server that provides rich feature enhancements over native ES
          modules, for example extremely fast Hot Module Replacement (HMR).{' '}
          {!expandContent ? (
            <span className={styles['more-button']} onClick={showMore}>
              ...more
            </span>
          ) : null}
          <span hidden={!expandContent}>
            A build command that bundles your code with Rollup, pre-configured
            to output highly optimized static assets for production. Vite is
            opinionated and comes with sensible defaults out of the box. Read
            about what's possible in the Features Guide. Support for frameworks
            or integration with other tools is possible through Plugins. The
            Config Section explains how to adapt Vite to your project if needed.
            Vite is also highly extensible via its Plugin API and JavaScript API
            with full typing support. You can learn more about the rationale
            behind the project in the Why Vite section.
          </span>
        </p>
        <img
          className={styles['post__body__media']}
          src="/post-image.webp"
          alt="POST IMAGE"
        />
      </div>
      {/* POST BODY */}

      {/* POST FOOTER */}
      <div className={styles['post__footer']}>
        <div className={styles['post__footer__info']}>
          <div className={styles['post__footer__info__like-count']}>
            <LikeIcon />
            <span>256</span>
          </div>
          <span className={styles['post__footer__info__comment-count']}>
            3 comments
          </span>
        </div>
        <div className={styles['post__footer__actions']}>
          <button className={styles['post__footer__actions__button']}>
            <LikeIcon />
            Like
          </button>
          <button className={styles['post__footer__actions__button']}>
            <CommentIcon />
            Comment
          </button>
          <button className={styles['post__footer__actions__button']}>
            <RepostIcon />
            Repost
          </button>
          <button className={styles['post__footer__actions__button']}>
            <SendIcon />
            Send
          </button>
        </div>
      </div>
      {/* POST FOOTER */}
    </div>
  );
}
