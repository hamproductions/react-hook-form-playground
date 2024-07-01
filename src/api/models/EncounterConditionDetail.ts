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

import { mapValues } from '../runtime';
import type { EncounterConditionValueSummary } from './EncounterConditionValueSummary';
import {
    EncounterConditionValueSummaryFromJSON,
    EncounterConditionValueSummaryFromJSONTyped,
    EncounterConditionValueSummaryToJSON,
} from './EncounterConditionValueSummary';
import type { EncounterConditionName } from './EncounterConditionName';
import {
    EncounterConditionNameFromJSON,
    EncounterConditionNameFromJSONTyped,
    EncounterConditionNameToJSON,
} from './EncounterConditionName';

/**
 * 
 * @export
 * @interface EncounterConditionDetail
 */
export interface EncounterConditionDetail {
    /**
     * 
     * @type {number}
     * @memberof EncounterConditionDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof EncounterConditionDetail
     */
    name: string;
    /**
     * 
     * @type {Array<EncounterConditionValueSummary>}
     * @memberof EncounterConditionDetail
     */
    values: Array<EncounterConditionValueSummary>;
    /**
     * 
     * @type {Array<EncounterConditionName>}
     * @memberof EncounterConditionDetail
     */
    names: Array<EncounterConditionName>;
}

/**
 * Check if a given object implements the EncounterConditionDetail interface.
 */
export function instanceOfEncounterConditionDetail(value: object): value is EncounterConditionDetail {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('values' in value) || value['values'] === undefined) return false;
    if (!('names' in value) || value['names'] === undefined) return false;
    return true;
}

export function EncounterConditionDetailFromJSON(json: any): EncounterConditionDetail {
    return EncounterConditionDetailFromJSONTyped(json, false);
}

export function EncounterConditionDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncounterConditionDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'values': ((json['values'] as Array<any>).map(EncounterConditionValueSummaryFromJSON)),
        'names': ((json['names'] as Array<any>).map(EncounterConditionNameFromJSON)),
    };
}

export function EncounterConditionDetailToJSON(value?: Omit<EncounterConditionDetail, 'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'values': ((value['values'] as Array<any>).map(EncounterConditionValueSummaryToJSON)),
        'names': ((value['names'] as Array<any>).map(EncounterConditionNameToJSON)),
    };
}

