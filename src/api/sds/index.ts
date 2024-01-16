import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { SdsQuery, SdsPageResult } from './types';

/**
 * SDS列表
 *
 * @param queryParams
 */
export function list(queryParams?: SdsQuery): AxiosPromise<SdsPageResult> {
    return request({
        url: '/envoy/sds/',
        method: 'get',
        params: queryParams
    });
}

export function add(envoyClusterId: number, version: string, valueData: string) {
    return request({
        url: '/envoy/sds/?envoyClusterId=' + envoyClusterId + "&version=" + version,
        method: 'post',
        data: valueData
    });
}

export function update(sdsId: number, version: string, valueData: string) {
    return request({
        url: '/envoy/sds/?sdsId=' + sdsId + '&version=' + version,
        method: 'patch',
        data: valueData
    });
}
