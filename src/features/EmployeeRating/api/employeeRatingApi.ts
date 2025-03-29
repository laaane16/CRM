import { rtkApi } from '../../../shared/api/rtkApi';

interface Rating {
  id: number;
  userId: number;
  employeeId: number;
}

interface ArticleArg {
  userId: number;
  employeeId: number;
}

const employeeRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployeeRating: build.query<Rating[], Pick<ArticleArg, 'userId'>>({
      query: ({ userId }) => ({
        url: '/employees-rating',
        params: {
          userId,
        },
      }),
    }),

    rateEmployee: build.mutation<void, ArticleArg>({
      query: (arg) => ({
        url: '/employees-rating',
        method: 'POST',
        body: arg,
      }),
    }),

    // failed because json-server need uniq id for delete record
    removeEmployeeRating: build.mutation<void, ArticleArg>({
      query: (arg) => ({
        url: '/employees-rating',
        method: 'DELETE',
        body: arg,
      }),
    }),
  }),
});

export const { useGetEmployeeRatingQuery, useRateEmployeeMutation, useRemoveEmployeeRatingMutation } =
  employeeRatingApi;
