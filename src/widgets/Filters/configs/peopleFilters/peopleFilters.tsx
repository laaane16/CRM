import * as styles from '../../ui/Filters.module.scss';
import { IFilterProperties } from '../../model/types/types';

const FiltersProperties = (): IFilterProperties[] => [
  {
    item: (
      <span className={styles.component}>
        <span className={styles.circle}></span>
        <span className={`${styles.componentTitle} secondary regular`}>Bpium</span>
        <span className={`${styles.count} secondary bold`}>10</span>
      </span>
    ),
    field: 'company.title',
    value: 'Bpium',
  },
  {
    item: (
      <span className={styles.component}>
        <span className={styles.circle}></span>
        <span className={`${styles.componentTitle} secondary regular`}>DevSoft</span>
        <span className={`${styles.count} secondary bold`}>10</span>
      </span>
    ),
    field: 'company.title',
    value: 'DevSoft',
  },
  {
    item: (
      <span className={styles.component}>
        <span className={styles.circle}></span>
        <span className={`${styles.componentTitle} secondary regular`}>InfoSys</span>
        <span className={`${styles.count} secondary bold`}>10</span>
      </span>
    ),
    field: 'company.title',
    value: 'InfoSys',
  },
  {
    item: (
      <span className={styles.component}>
        <span className={styles.circle}></span>
        <span className={`${styles.componentTitle} secondary regular`}>NetWork</span>
        <span className={`${styles.count} secondary bold`}>10</span>
      </span>
    ),
    field: 'company.title',
    value: 'NetWork',
  },
  {
    item: (
      <span className={styles.component}>
        <span className={styles.circle}></span>
        <span className={`${styles.componentTitle} secondary regular`}>TechCorp</span>
        <span className={`${styles.count} secondary bold`}>10</span>
      </span>
    ),
    field: 'company.title',
    value: 'TechCorp',
  },
];

export default FiltersProperties;
