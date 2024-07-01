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
 * @interface MoveDetailEffectChangesInnerEffectEntriesInner
 */
export interface MoveDetailEffectChangesInnerEffectEntriesInner {
  /**
   *
   * @type {string}
   * @memberof MoveDetailEffectChangesInnerEffectEntriesInner
   */
  effect: string;
  /**
   *
   * @type {AbilityDetailPokemonInnerPokemon}
   * @memberof MoveDetailEffectChangesInnerEffectEntriesInner
   */
  language: AbilityDetailPokemonInnerPokemon;
}

/**
 * Check if a given object implements the MoveDetailEffectChangesInnerEffectEntriesInner interface.
 */
export function instanceOfMoveDetailEffectChangesInnerEffectEntriesInner(
  value: object
): value is MoveDetailEffectChangesInnerEffectEntriesInner {
  if (!("effect" in value) || value["effect"] === undefined) return false;
  if (!("language" in value) || value["language"] === undefined) return false;
  return true;
}

export function MoveDetailEffectChangesInnerEffectEntriesInnerFromJSON(
  json: any
): MoveDetailEffectChangesInnerEffectEntriesInner {
  return MoveDetailEffectChangesInnerEffectEntriesInnerFromJSONTyped(
    json,
    false
  );
}

export function MoveDetailEffectChangesInnerEffectEntriesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MoveDetailEffectChangesInnerEffectEntriesInner {
  if (json == null) {
    return json;
  }
  return {
    effect: json["effect"],
    language: AbilityDetailPokemonInnerPokemonFromJSON(json["language"]),
  };
}

export function MoveDetailEffectChangesInnerEffectEntriesInnerToJSON(
  value?: MoveDetailEffectChangesInnerEffectEntriesInner | null
): any {
  if (value == null) {
    return value;
  }
  return {
    effect: value["effect"],
    language: AbilityDetailPokemonInnerPokemonToJSON(value["language"]),
  };
}
