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
import type { MoveMetaAilmentName } from "./MoveMetaAilmentName";
import {
  MoveMetaAilmentNameFromJSON,
  MoveMetaAilmentNameFromJSONTyped,
  MoveMetaAilmentNameToJSON,
} from "./MoveMetaAilmentName";

/**
 *
 * @export
 * @interface MoveMetaAilmentDetail
 */
export interface MoveMetaAilmentDetail {
  /**
   *
   * @type {number}
   * @memberof MoveMetaAilmentDetail
   */
  readonly id: number;
  /**
   *
   * @type {string}
   * @memberof MoveMetaAilmentDetail
   */
  name: string;
  /**
   *
   * @type {Array<AbilityDetailPokemonInnerPokemon>}
   * @memberof MoveMetaAilmentDetail
   */
  moves: Array<AbilityDetailPokemonInnerPokemon>;
  /**
   *
   * @type {Array<MoveMetaAilmentName>}
   * @memberof MoveMetaAilmentDetail
   */
  names: Array<MoveMetaAilmentName>;
}

/**
 * Check if a given object implements the MoveMetaAilmentDetail interface.
 */
export function instanceOfMoveMetaAilmentDetail(
  value: object
): value is MoveMetaAilmentDetail {
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("moves" in value) || value["moves"] === undefined) return false;
  if (!("names" in value) || value["names"] === undefined) return false;
  return true;
}

export function MoveMetaAilmentDetailFromJSON(
  json: any
): MoveMetaAilmentDetail {
  return MoveMetaAilmentDetailFromJSONTyped(json, false);
}

export function MoveMetaAilmentDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MoveMetaAilmentDetail {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    moves: (json["moves"] as Array<any>).map(
      AbilityDetailPokemonInnerPokemonFromJSON
    ),
    names: (json["names"] as Array<any>).map(MoveMetaAilmentNameFromJSON),
  };
}

export function MoveMetaAilmentDetailToJSON(
  value?: Omit<MoveMetaAilmentDetail, "id"> | null
): any {
  if (value == null) {
    return value;
  }
  return {
    name: value["name"],
    moves: (value["moves"] as Array<any>).map(
      AbilityDetailPokemonInnerPokemonToJSON
    ),
    names: (value["names"] as Array<any>).map(MoveMetaAilmentNameToJSON),
  };
}
