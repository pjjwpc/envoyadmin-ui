import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { EdsQuery, EdsPageResult} from './types';

/**
 * cluster列表
 *
 * @param queryParams
 */
export function list(queryParams?: EdsQuery): AxiosPromise<EdsPageResult> {
    return request({
        url: '/envoy/eds/',
        method: 'get',
        params: queryParams
    });
}

export function add(envoyClusterId:number,version:string,valueData:string) {
    return request({
        url: '/envoy/eds/?envoyCluster='+envoyClusterId+"&version="+version,
        method: 'post',
        data:valueData
    });
}

export function update(edsId:number,version:string,valueData:string ) {
    return request({
        url: '/envoy/eds/?edsId='+edsId+'&version='+version,
        method: 'patch',
        data:valueData
    });
}
