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
import type { MoveDetailEffectChangesInnerEffectEntriesInner } from "./MoveDetailEffectChangesInnerEffectEntriesInner";
import {
  MoveDetailEffectChangesInnerEffectEntriesInnerFromJSON,
  MoveDetailEffectChangesInnerEffectEntriesInnerFromJSONTyped,
  MoveDetailEffectChangesInnerEffectEntriesInnerToJSON,
} from "./MoveDetailEffectChangesInnerEffectEntriesInner";

/**
 *
 * @export
 * @interface MoveDetailEffectChangesInner
 */
export interface MoveDetailEffectChangesInner {
  /**
   *
   * @type {Array<MoveDetailEffectChangesInnerEffectEntriesInner>}
   * @memberof MoveDetailEffectChangesInner
   */
  effectEntries: Array<MoveDetailEffectChangesInnerEffectEntriesInner>;
  /**
   *
   * @type {AbilityDetailPokemonInnerPokemon}
   * @memberof MoveDetailEffectChangesInner
   */
  versionGroup: AbilityDetailPokemonInnerPokemon;
}

/**
 * Check if a given object implements the MoveDetailEffectChangesInner interface.
 */
export function instanceOfMoveDetailEffectChangesInner(
  value: object
): value is MoveDetailEffectChangesInner {
  if (!("effectEntries" in value) || value["effectEntries"] === undefined)
    return false;
  if (!("versionGroup" in value) || value["versionGroup"] === undefined)
    return false;
  return true;
}

export function MoveDetailEffectChangesInnerFromJSON(
  json: any
): MoveDetailEffectChangesInner {
  return MoveDetailEffectChangesInnerFromJSONTyped(json, false);
}

export function MoveDetailEffectChangesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MoveDetailEffectChangesInner {
  if (json == null) {
    return json;
  }
  return {
    effectEntries: (json["effect_entries"] as Array<any>).map(
      MoveDetailEffectChangesInnerEffectEntriesInnerFromJSON
    ),
    versionGroup: AbilityDetailPokemonInnerPokemonFromJSON(
      json["version_group"]
    ),
  };
}

export function MoveDetailEffectChangesInnerToJSON(
  value?: MoveDetailEffectChangesInner | null
): any {
  if (value == null) {
    return value;
  }
  return {
    effect_entries: (value["effectEntries"] as Array<any>).map(
      MoveDetailEffectChangesInnerEffectEntriesInnerToJSON
    ),
    version_group: AbilityDetailPokemonInnerPokemonToJSON(
      value["versionGroup"]
    ),
  };
}
