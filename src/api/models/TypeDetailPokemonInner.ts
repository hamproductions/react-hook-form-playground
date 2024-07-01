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
import type { TypeDetailPokemonInnerPokemon } from './TypeDetailPokemonInnerPokemon';
import {
    TypeDetailPokemonInnerPokemonFromJSON,
    TypeDetailPokemonInnerPokemonFromJSONTyped,
    TypeDetailPokemonInnerPokemonToJSON,
} from './TypeDetailPokemonInnerPokemon';

/**
 * 
 * @export
 * @interface TypeDetailPokemonInner
 */
export interface TypeDetailPokemonInner {
    /**
     * 
     * @type {number}
     * @memberof TypeDetailPokemonInner
     */
    slot?: number;
    /**
     * 
     * @type {TypeDetailPokemonInnerPokemon}
     * @memberof TypeDetailPokemonInner
     */
    pokemon?: TypeDetailPokemonInnerPokemon;
}

/**
 * Check if a given object implements the TypeDetailPokemonInner interface.
 */
export function instanceOfTypeDetailPokemonInner(value: object): value is TypeDetailPokemonInner {
    return true;
}

export function TypeDetailPokemonInnerFromJSON(json: any): TypeDetailPokemonInner {
    return TypeDetailPokemonInnerFromJSONTyped(json, false);
}

export function TypeDetailPokemonInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypeDetailPokemonInner {
    if (json == null) {
        return json;
    }
    return {
        
        'slot': json['slot'] == null ? undefined : json['slot'],
        'pokemon': json['pokemon'] == null ? undefined : TypeDetailPokemonInnerPokemonFromJSON(json['pokemon']),
    };
}

export function TypeDetailPokemonInnerToJSON(value?: TypeDetailPokemonInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'slot': value['slot'],
        'pokemon': TypeDetailPokemonInnerPokemonToJSON(value['pokemon']),
    };
}

