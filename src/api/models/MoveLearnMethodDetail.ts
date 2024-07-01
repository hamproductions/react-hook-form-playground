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

import type { MoveLearnMethodName } from "./MoveLearnMethodName";
import {
  MoveLearnMethodNameFromJSON,
  MoveLearnMethodNameFromJSONTyped,
  MoveLearnMethodNameToJSON,
} from "./MoveLearnMethodName";
import type { AbilityDetailPokemonInnerPokemon } from "./AbilityDetailPokemonInnerPokemon";
import {
  AbilityDetailPokemonInnerPokemonFromJSON,
  AbilityDetailPokemonInnerPokemonFromJSONTyped,
  AbilityDetailPokemonInnerPokemonToJSON,
} from "./AbilityDetailPokemonInnerPokemon";
import type { MoveLearnMethodDescription } from "./MoveLearnMethodDescription";
import {
  MoveLearnMethodDescriptionFromJSON,
  MoveLearnMethodDescriptionFromJSONTyped,
  MoveLearnMethodDescriptionToJSON,
} from "./MoveLearnMethodDescription";

/**
 *
 * @export
 * @interface MoveLearnMethodDetail
 */
export interface MoveLearnMethodDetail {
  /**
   *
   * @type {number}
   * @memberof MoveLearnMethodDetail
   */
  readonly id: number;
  /**
   *
   * @type {string}
   * @memberof MoveLearnMethodDetail
   */
  name: string;
  /**
   *
   * @type {Array<MoveLearnMethodName>}
   * @memberof MoveLearnMethodDetail
   */
  names: Array<MoveLearnMethodName>;
  /**
   *
   * @type {Array<MoveLearnMethodDescription>}
   * @memberof MoveLearnMethodDetail
   */
  descriptions: Array<MoveLearnMethodDescription>;
  /**
   *
   * @type {Array<AbilityDetailPokemonInnerPokemon>}
   * @memberof MoveLearnMethodDetail
   */
  versionGroups: Array<AbilityDetailPokemonInnerPokemon>;
}

/**
 * Check if a given object implements the MoveLearnMethodDetail interface.
 */
export function instanceOfMoveLearnMethodDetail(
  value: object
): value is MoveLearnMethodDetail {
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("names" in value) || value["names"] === undefined) return false;
  if (!("descriptions" in value) || value["descriptions"] === undefined)
    return false;
  if (!("versionGroups" in value) || value["versionGroups"] === undefined)
    return false;
  return true;
}

export function MoveLearnMethodDetailFromJSON(
  json: any
): MoveLearnMethodDetail {
  return MoveLearnMethodDetailFromJSONTyped(json, false);
}

export function MoveLearnMethodDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MoveLearnMethodDetail {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    names: (json["names"] as Array<any>).map(MoveLearnMethodNameFromJSON),
    descriptions: (json["descriptions"] as Array<any>).map(
      MoveLearnMethodDescriptionFromJSON
    ),
    versionGroups: (json["version_groups"] as Array<any>).map(
      AbilityDetailPokemonInnerPokemonFromJSON
    ),
  };
}

export function MoveLearnMethodDetailToJSON(
  value?: Omit<MoveLearnMethodDetail, "id"> | null
): any {
  if (value == null) {
    return value;
  }
  return {
    name: value["name"],
    names: (value["names"] as Array<any>).map(MoveLearnMethodNameToJSON),
    descriptions: (value["descriptions"] as Array<any>).map(
      MoveLearnMethodDescriptionToJSON
    ),
    version_groups: (value["versionGroups"] as Array<any>).map(
      AbilityDetailPokemonInnerPokemonToJSON
    ),
  };
}
