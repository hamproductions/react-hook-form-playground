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
import type { PokemonColorName } from './PokemonColorName';
import {
    PokemonColorNameFromJSON,
    PokemonColorNameFromJSONTyped,
    PokemonColorNameToJSON,
} from './PokemonColorName';
import type { PokemonSpeciesSummary } from './PokemonSpeciesSummary';
import {
    PokemonSpeciesSummaryFromJSON,
    PokemonSpeciesSummaryFromJSONTyped,
    PokemonSpeciesSummaryToJSON,
} from './PokemonSpeciesSummary';

/**
 * 
 * @export
 * @interface PokemonColorDetail
 */
export interface PokemonColorDetail {
    /**
     * 
     * @type {number}
     * @memberof PokemonColorDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof PokemonColorDetail
     */
    name: string;
    /**
     * 
     * @type {Array<PokemonColorName>}
     * @memberof PokemonColorDetail
     */
    names: Array<PokemonColorName>;
    /**
     * 
     * @type {Array<PokemonSpeciesSummary>}
     * @memberof PokemonColorDetail
     */
    pokemonSpecies: Array<PokemonSpeciesSummary>;
}

/**
 * Check if a given object implements the PokemonColorDetail interface.
 */
export function instanceOfPokemonColorDetail(value: object): value is PokemonColorDetail {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('names' in value) || value['names'] === undefined) return false;
    if (!('pokemonSpecies' in value) || value['pokemonSpecies'] === undefined) return false;
    return true;
}

export function PokemonColorDetailFromJSON(json: any): PokemonColorDetail {
    return PokemonColorDetailFromJSONTyped(json, false);
}

export function PokemonColorDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): PokemonColorDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'names': ((json['names'] as Array<any>).map(PokemonColorNameFromJSON)),
        'pokemonSpecies': ((json['pokemon_species'] as Array<any>).map(PokemonSpeciesSummaryFromJSON)),
    };
}

export function PokemonColorDetailToJSON(value?: Omit<PokemonColorDetail, 'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'names': ((value['names'] as Array<any>).map(PokemonColorNameToJSON)),
        'pokemon_species': ((value['pokemonSpecies'] as Array<any>).map(PokemonSpeciesSummaryToJSON)),
    };
}

