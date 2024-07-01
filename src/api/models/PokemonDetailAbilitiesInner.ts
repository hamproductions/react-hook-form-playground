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

import type { AbilityDetailPokemonInnerPokemon } from "./AbilityDetailPokemonInnerPokemon";
import {
  AbilityDetailPokemonInnerPokemonFromJSON,
  AbilityDetailPokemonInnerPokemonFromJSONTyped,
  AbilityDetailPokemonInnerPokemonToJSON,
} from "./AbilityDetailPokemonInnerPokemon";

/**
 *
 * @export
 * @interface PokemonDetailAbilitiesInner
 */
export interface PokemonDetailAbilitiesInner {
  /**
   *
   * @type {AbilityDetailPokemonInnerPokemon}
   * @memberof PokemonDetailAbilitiesInner
   */
  ability: AbilityDetailPokemonInnerPokemon;
  /**
   *
   * @type {boolean}
   * @memberof PokemonDetailAbilitiesInner
   */
  isHidden: boolean;
  /**
   *
   * @type {number}
   * @memberof PokemonDetailAbilitiesInner
   */
  slot: number;
}

/**
 * Check if a given object implements the PokemonDetailAbilitiesInner interface.
 */
export function instanceOfPokemonDetailAbilitiesInner(
  value: object
): value is PokemonDetailAbilitiesInner {
  if (!("ability" in value) || value["ability"] === undefined) return false;
  if (!("isHidden" in value) || value["isHidden"] === undefined) return false;
  if (!("slot" in value) || value["slot"] === undefined) return false;
  return true;
}

export function PokemonDetailAbilitiesInnerFromJSON(
  json: any
): PokemonDetailAbilitiesInner {
  return PokemonDetailAbilitiesInnerFromJSONTyped(json, false);
}

export function PokemonDetailAbilitiesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PokemonDetailAbilitiesInner {
  if (json == null) {
    return json;
  }
  return {
    ability: AbilityDetailPokemonInnerPokemonFromJSON(json["ability"]),
    isHidden: json["is_hidden"],
    slot: json["slot"],
  };
}

export function PokemonDetailAbilitiesInnerToJSON(
  value?: PokemonDetailAbilitiesInner | null
): any {
  if (value == null) {
    return value;
  }
  return {
    ability: AbilityDetailPokemonInnerPokemonToJSON(value["ability"]),
    is_hidden: value["isHidden"],
    slot: value["slot"],
  };
}
