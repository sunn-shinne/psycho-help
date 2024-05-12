import { useQuery } from '@tanstack/react-query';
import { Spin, message } from 'antd';
import { useState } from 'react';
import { Pagination } from '../../../api/types';
import { serviceApi } from '../../../api/service-api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination as SwiperPagination, Scrollbar, A11y } from 'swiper/modules';
import dayjs from 'dayjs';

const TherapistsBlock = () => {
  const [params, setParams] = useState<Pagination>({ pageSize: 15, pageNo: 1 });

  const { data, isFetching } = useQuery({
    queryKey: ['dosctors', params],
    keepPreviousData: true,
    cacheTime: 1000 * 15,
    queryFn: () => serviceApi.getDoctors(params),
    onError: () => message.error('Не удалось список докторов'),
  });

  return (
    <Spin spinning={isFetching}>
      <div>
        <Swiper
          spaceBetween={12}
          slidesPerView={10}
          modules={[Navigation, SwiperPagination, Scrollbar, A11y]}
        >
          {data?.content &&
            data.content?.map((doctor) => (
              <SwiperSlide key={`${doctor.userId}-${dayjs().format()}`}>
                <div>{doctor.name}</div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Spin>
  );
};

export default TherapistsBlock;
