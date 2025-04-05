import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Stars from '../../../shared/ui/Stars/Stars';
import { useRateEmployeeMutation, useRemoveEmployeeRatingMutation } from '../api/employeeRatingApi';
import { getUserId } from '../../../entities/User';

interface Props {
  className?: string;
  isSelected: boolean;
  employeeId: number;
  userId: number;
}

const EmployeeRating: FC<Props> = ({ className, isSelected, employeeId, userId }) => {
  const [rateEmployee] = useRateEmployeeMutation();
  const [removeEmployeeRating] = useRemoveEmployeeRatingMutation();

  const onSelect = useCallback((idx: number) => {
    if (idx !== -1) {
      rateEmployee({ userId, employeeId });
    } else {
      removeEmployeeRating({ userId, employeeId });
    }
  }, []);

  return <Stars selectedStar={isSelected ? 0 : -1} onSelect={onSelect} className={className} count={1} />;
};

export default EmployeeRating;
