import { FC, useMemo, useState } from 'react';
import cn from 'classnames';

import * as styles from './MainCard.module.scss';

import { IProfile, profileActions } from '../../../../entities/Profile';
import { Button, ButtonSizes, Dropdown, Ellipsis, Input, Message } from '../../../../shared/ui';
import { useAppDispatch } from '../../../../shared/lib';
import updateProfileData from '../../../../entities/Profile/model/services/updateProfileData/updateProfileData';
import Skeleton from '../../../../shared/ui/Skeleton/Skeleton';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from '../../../../entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';

interface Props {
  className?: string;
  data?: IProfile;
  error?: string;
  isLoading: boolean;
  canEdit: boolean;
}

interface MenuItem {
  value: string;
  label: string;
}

const socialItems = [
  { icon: 'vk', link: '' },
  { icon: 'youtube', link: '' },
  { icon: 'tg', link: '' },
  { icon: 'Frame', link: '' },
  { icon: 'mail', link: '' },
  { icon: 'medium', link: '' },
  { icon: 'skype', link: '' },
  { icon: 'github', link: '' },
  { icon: 'gmail', link: '' },
  { icon: 'whatsapp', link: '' },
  { icon: 'pinterest', link: '' },
];

const MainCard: FC<Props> = ({ isLoading, data, error, className, canEdit }) => {
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const mainInfoClasses = cn(styles.mainInfo, className, {
    [styles.editorMode]: !readonly,
    [styles.hasError]: Boolean(error),
  });

  const mainInfoItemClasses = cn(styles.mainInfoItem, 'primary medium');
  const dateItemClasses = cn(styles.dateItem, 'tiny medium');

  const onEditorMode = () => {
    dispatch(profileActions.onEditorMode());
  };

  const offEditorMode = async () => {
    dispatch(updateProfileData(data as IProfile));
  };

  const onCancelEdit = () => {
    dispatch(profileActions.cancelEdit());
  };

  const onChangeNumber = (value: string) => {
    dispatch(profileActions.updateProfile({ number: value }));
  };

  const onChangeMail = (value: string) => {
    dispatch(profileActions.updateProfile({ mail: value }));
  };

  const onChangeMainPost = (value: string) => {
    dispatch(profileActions.updateProfile({ post: { ...data?.post, main: value } }));
  };

  const onChangeExtraPost = (value: string) => {
    dispatch(profileActions.updateProfile({ post: { ...data?.post, extra: value } }));
  };

  const onChangeAddress = (value: string) => {
    dispatch(profileActions.updateProfile({ address: value }));
  };

  const handleDropdownClick = (item: MenuItem) => {
    switch (item.value) {
      case 'edit':
        onEditorMode();
        break;
      default:
        break;
    }
  };

  // TODO: marker should return from profile data
  return (
    <div className={mainInfoClasses}>
      {isLoading ? (
        <>
          <Skeleton className={styles.skeleton} width="100%" height="220px" />
          <Skeleton className={styles.skeleton} width="100%" height="80px" />
          <Skeleton className={styles.skeleton} width="100%" height="30px" />
        </>
      ) : (
        <>
          {error && <Message description={error || ''} />}
          <span className={styles.marker}>штатный</span>
          {canEdit && (
            <Dropdown
              onClick={handleDropdownClick}
              menu={[{ value: 'edit', label: 'Редактировать профиль' }]}
              className={styles.extra}
            >
              <Ellipsis />
            </Dropdown>
          )}
          <ul className={styles.mainInfoList}>
            <li className={mainInfoItemClasses}>
              <span className={cn(`icon-call`, styles.mainInfoItemIcon)} />
              {!readonly ? <Input onChange={onChangeNumber} value={data?.number || ''} /> : data?.number}
            </li>
            <li className={mainInfoItemClasses}>
              <span className={cn(`icon-alternate-mail`, styles.mainInfoItemIcon)} />
              {!readonly ? <Input onChange={onChangeMail} value={data?.mail || ''} /> : data?.mail}
            </li>
            <li className={mainInfoItemClasses}>
              <span className={cn(`icon-verify-bordered`, styles.mainInfoItemIcon)} />
              {!readonly ? <Input onChange={onChangeMainPost} value={data?.post.main || ''} /> : data?.post.main}
            </li>
            <li className={mainInfoItemClasses}>
              <span className={cn(`icon-verify-bordered`, styles.mainInfoItemIcon)} />
              {!readonly ? <Input onChange={onChangeExtraPost} value={data?.post.extra || ''} /> : data?.post.extra}
            </li>
            <li className={mainInfoItemClasses}>
              <span className={cn(`icon-map`, styles.mainInfoItemIcon)} />
              {!readonly ? <Input onChange={onChangeAddress} value={data?.address || ''} /> : data?.address}
            </li>
          </ul>
          {!readonly ? (
            <>
              <Button className={styles.saveButton} size={ButtonSizes.SMALL} onClick={offEditorMode}>
                Сохранить
              </Button>
              <Button className={styles.cancelEditButton} size={ButtonSizes.SMALL} onClick={onCancelEdit}>
                Отмена
              </Button>
            </>
          ) : null}
          <ul className={styles.socialsList}>
            {socialItems.map((item, index) => (
              <li className={styles.socialsItem} key={index}>
                <span className={cn(`icon-${item.icon}`, styles.socialIcon)}>
                  <a href={item.link}></a>
                </span>
              </li>
            ))}
          </ul>
          <ul>
            <li className={dateItemClasses}>{data?.createdAt}</li>
            <li className={dateItemClasses}>{data?.updatedAt}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default MainCard;
