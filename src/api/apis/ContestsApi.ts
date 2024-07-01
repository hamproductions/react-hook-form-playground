/* tslint:disable */
/* eslint-disable */
/**
 * PokéAPI
 * All the Pokémon data you\'ll ever need in one place, easily accessible through a modern free open-source RESTful API.  ## What is this?  This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.  We\'ve covered everything from Pokémon to Berry Flavors.  ## Where do I start?  We have awesome [documentation](https://pokeapi.co/docs/v2) on how to use this API. It takes minutes to get started.  This API will always be publicly available and will never require any extensive setup process to consume.  Created by [**Paul Hallett**(]https://github.com/phalt) and other [**PokéAPI contributors***](https://github.com/PokeAPI/pokeapi#contributing) around the world. Pokémon and Pokémon character names are trademarks of Nintendo.     
 *
 * The version of the OpenAPI document: 2.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ContestEffectDetail,
  ContestTypeDetail,
  PaginatedContestEffectSummaryList,
  PaginatedContestTypeSummaryList,
  PaginatedSuperContestEffectSummaryList,
  SuperContestEffectDetail,
} from '../models/index';
import {
    ContestEffectDetailFromJSON,
    ContestEffectDetailToJSON,
    ContestTypeDetailFromJSON,
    ContestTypeDetailToJSON,
    PaginatedContestEffectSummaryListFromJSON,
    PaginatedContestEffectSummaryListToJSON,
    PaginatedContestTypeSummaryListFromJSON,
    PaginatedContestTypeSummaryListToJSON,
    PaginatedSuperContestEffectSummaryListFromJSON,
    PaginatedSuperContestEffectSummaryListToJSON,
    SuperContestEffectDetailFromJSON,
    SuperContestEffectDetailToJSON,
} from '../models/index';

export interface ContestEffectListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface ContestEffectRetrieveRequest {
    id: string;
}

export interface ContestTypeListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface ContestTypeRetrieveRequest {
    id: string;
}

export interface SuperContestEffectListRequest {
    limit?: number;
    offset?: number;
    q?: string;
}

export interface SuperContestEffectRetrieveRequest {
    id: string;
}

/**
 * 
 */
export class ContestsApi extends runtime.BaseAPI {

    /**
     * Contest effects refer to the effects of moves when used in contests.
     * List contest effects
     */
    async contestEffectListRaw(requestParameters: ContestEffectListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedContestEffectSummaryList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/contest-effect/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedContestEffectSummaryListFromJSON(jsonValue));
    }

    /**
     * Contest effects refer to the effects of moves when used in contests.
     * List contest effects
     */
    async contestEffectList(requestParameters: ContestEffectListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedContestEffectSummaryList> {
        const response = await this.contestEffectListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Contest effects refer to the effects of moves when used in contests.
     * Get contest effect
     */
    async contestEffectRetrieveRaw(requestParameters: ContestEffectRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContestEffectDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling contestEffectRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/contest-effect/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContestEffectDetailFromJSON(jsonValue));
    }

    /**
     * Contest effects refer to the effects of moves when used in contests.
     * Get contest effect
     */
    async contestEffectRetrieve(requestParameters: ContestEffectRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContestEffectDetail> {
        const response = await this.contestEffectRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Contest types are categories judges used to weigh a Pokémon\'s condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
     * List contest types
     */
    async contestTypeListRaw(requestParameters: ContestTypeListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedContestTypeSummaryList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/contest-type/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedContestTypeSummaryListFromJSON(jsonValue));
    }

    /**
     * Contest types are categories judges used to weigh a Pokémon\'s condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
     * List contest types
     */
    async contestTypeList(requestParameters: ContestTypeListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedContestTypeSummaryList> {
        const response = await this.contestTypeListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Contest types are categories judges used to weigh a Pokémon\'s condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
     * Get contest type
     */
    async contestTypeRetrieveRaw(requestParameters: ContestTypeRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContestTypeDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling contestTypeRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/contest-type/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContestTypeDetailFromJSON(jsonValue));
    }

    /**
     * Contest types are categories judges used to weigh a Pokémon\'s condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
     * Get contest type
     */
    async contestTypeRetrieve(requestParameters: ContestTypeRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContestTypeDetail> {
        const response = await this.contestTypeRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Super contest effects refer to the effects of moves when used in super contests.
     * List super contest effects
     */
    async superContestEffectListRaw(requestParameters: SuperContestEffectListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedSuperContestEffectSummaryList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/super-contest-effect/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedSuperContestEffectSummaryListFromJSON(jsonValue));
    }

    /**
     * Super contest effects refer to the effects of moves when used in super contests.
     * List super contest effects
     */
    async superContestEffectList(requestParameters: SuperContestEffectListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedSuperContestEffectSummaryList> {
        const response = await this.superContestEffectListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Super contest effects refer to the effects of moves when used in super contests.
     * Get super contest effect
     */
    async superContestEffectRetrieveRaw(requestParameters: SuperContestEffectRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuperContestEffectDetail>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling superContestEffectRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v2/super-contest-effect/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuperContestEffectDetailFromJSON(jsonValue));
    }

    /**
     * Super contest effects refer to the effects of moves when used in super contests.
     * Get super contest effect
     */
    async superContestEffectRetrieve(requestParameters: SuperContestEffectRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuperContestEffectDetail> {
        const response = await this.superContestEffectRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
