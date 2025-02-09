import { FC, useMemo, useState } from 'react';
import cn from 'classnames';

import * as styles from './MainCard.module.scss';

import { IProfile, profileActions } from '../../../../entities/Profile';
import { Button, ButtonSizes, Dropdown, Ellipsis, Input } from '../../../../shared/ui';
import { useAppDispatch } from '../../../../shared/lib';
import updateProfileData from '../../../../entities/Profile/model/services/updateProfileData';

interface Props {
  className?: string;
  data?: IProfile;
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

const MainCard: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  const [isEditorMode, setIsEditorMode] = useState(false);

  const mainInfoClasses = cn(styles.mainInfo, {
    [styles.editorMode]: isEditorMode,
  });
  const mainInfoItemClasses = cn(styles.mainInfoItem, 'primary medium');
  const dateItemClasses = cn(styles.dateItem, 'tiny medium');

  const onEditorMode = () => {
    setIsEditorMode(true);
  };

  const offEditorMode = () => {
    setIsEditorMode(false);
    dispatch(updateProfileData(data as IProfile));
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

  const handleDropdownClick = (value: MenuItem) => {
    switch (value.value) {
      case 'edit':
        onEditorMode();
        break;
      default:
        break;
    }
  };

  // TODO: marker should return from profile data
  return (
    <>
      <div className={mainInfoClasses}>
        <span className={styles.marker}>штатный</span>
        <Dropdown
          onClick={handleDropdownClick}
          menu={[{ value: 'edit', label: 'Редактировать профиль' }]}
          className={styles.extra}
        >
          <Ellipsis />
        </Dropdown>
        <ul className={styles.mainInfoList}>
          {/* {mainInfoListData.map((item, index) => (
            <li key={index} className={mainInfoItemClasses}>
              <span className={cn(`icon-${item.icon}`, styles.mainInfoItemIcon)} />
              {editorMode ? <Input onChange={() => {}} value={item.data as string} /> : item.data}
            </li>
          ))} */}
          <li className={mainInfoItemClasses}>
            <span className={cn(`icon-call`, styles.mainInfoItemIcon)} />
            {isEditorMode ? <Input onChange={onChangeNumber} value={data?.number || ''} /> : data?.number}
          </li>
          <li className={mainInfoItemClasses}>
            <span className={cn(`icon-alternate-mail`, styles.mainInfoItemIcon)} />
            {isEditorMode ? <Input onChange={onChangeMail} value={data?.mail || ''} /> : data?.mail}
          </li>
          <li className={mainInfoItemClasses}>
            <span className={cn(`icon-verify-bordered`, styles.mainInfoItemIcon)} />
            {isEditorMode ? <Input onChange={onChangeMainPost} value={data?.post.main || ''} /> : data?.post.main}
          </li>
          <li className={mainInfoItemClasses}>
            <span className={cn(`icon-verify-bordered`, styles.mainInfoItemIcon)} />
            {isEditorMode ? <Input onChange={onChangeExtraPost} value={data?.post.extra || ''} /> : data?.post.extra}
          </li>
          <li className={mainInfoItemClasses}>
            <span className={cn(`icon-map`, styles.mainInfoItemIcon)} />
            {isEditorMode ? <Input onChange={onChangeAddress} value={data?.address || ''} /> : data?.address}
          </li>
        </ul>
        {isEditorMode ? (
          <Button className={styles.saveButton} size={ButtonSizes.SMALL} onClick={offEditorMode}>
            Сохранить
          </Button>
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
      </div>
    </>
  );
};

export default MainCard;
