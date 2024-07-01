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

import type { VersionGroupSummary } from "./VersionGroupSummary";
import {
  VersionGroupSummaryFromJSON,
  VersionGroupSummaryFromJSONTyped,
  VersionGroupSummaryToJSON,
} from "./VersionGroupSummary";
import type { PokemonFormDetailFormNamesInner } from "./PokemonFormDetailFormNamesInner";
import {
  PokemonFormDetailFormNamesInnerFromJSON,
  PokemonFormDetailFormNamesInnerFromJSONTyped,
  PokemonFormDetailFormNamesInnerToJSON,
} from "./PokemonFormDetailFormNamesInner";
import type { PokemonSummary } from "./PokemonSummary";
import {
  PokemonSummaryFromJSON,
  PokemonSummaryFromJSONTyped,
  PokemonSummaryToJSON,
} from "./PokemonSummary";
import type { PokemonFormDetailSprites } from "./PokemonFormDetailSprites";
import {
  PokemonFormDetailSpritesFromJSON,
  PokemonFormDetailSpritesFromJSONTyped,
  PokemonFormDetailSpritesToJSON,
} from "./PokemonFormDetailSprites";
import type { PokemonDetailTypesInner } from "./PokemonDetailTypesInner";
import {
  PokemonDetailTypesInnerFromJSON,
  PokemonDetailTypesInnerFromJSONTyped,
  PokemonDetailTypesInnerToJSON,
} from "./PokemonDetailTypesInner";

/**
 *
 * @export
 * @interface PokemonFormDetail
 */
export interface PokemonFormDetail {
  /**
   *
   * @type {number}
   * @memberof PokemonFormDetail
   */
  readonly id: number;
  /**
   *
   * @type {string}
   * @memberof PokemonFormDetail
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof PokemonFormDetail
   */
  order?: number;
  /**
   *
   * @type {number}
   * @memberof PokemonFormDetail
   */
  formOrder?: number;
  /**
   *
   * @type {boolean}
   * @memberof PokemonFormDetail
   */
  isDefault?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PokemonFormDetail
   */
  isBattleOnly?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PokemonFormDetail
   */
  isMega?: boolean;
  /**
   *
   * @type {string}
   * @memberof PokemonFormDetail
   */
  formName: string;
  /**
   *
   * @type {PokemonSummary}
   * @memberof PokemonFormDetail
   */
  pokemon: PokemonSummary;
  /**
   *
   * @type {PokemonFormDetailSprites}
   * @memberof PokemonFormDetail
   */
  sprites: PokemonFormDetailSprites;
  /**
   *
   * @type {VersionGroupSummary}
   * @memberof PokemonFormDetail
   */
  versionGroup: VersionGroupSummary;
  /**
   *
   * @type {Array<PokemonFormDetailFormNamesInner>}
   * @memberof PokemonFormDetail
   */
  formNames: Array<PokemonFormDetailFormNamesInner>;
  /**
   *
   * @type {Array<PokemonFormDetailFormNamesInner>}
   * @memberof PokemonFormDetail
   */
  names: Array<PokemonFormDetailFormNamesInner>;
  /**
   *
   * @type {Array<PokemonDetailTypesInner>}
   * @memberof PokemonFormDetail
   */
  types: Array<PokemonDetailTypesInner>;
}

/**
 * Check if a given object implements the PokemonFormDetail interface.
 */
export function instanceOfPokemonFormDetail(
  value: object
): value is PokemonFormDetail {
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("formName" in value) || value["formName"] === undefined) return false;
  if (!("pokemon" in value) || value["pokemon"] === undefined) return false;
  if (!("sprites" in value) || value["sprites"] === undefined) return false;
  if (!("versionGroup" in value) || value["versionGroup"] === undefined)
    return false;
  if (!("formNames" in value) || value["formNames"] === undefined) return false;
  if (!("names" in value) || value["names"] === undefined) return false;
  if (!("types" in value) || value["types"] === undefined) return false;
  return true;
}

export function PokemonFormDetailFromJSON(json: any): PokemonFormDetail {
  return PokemonFormDetailFromJSONTyped(json, false);
}

export function PokemonFormDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PokemonFormDetail {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    order: json["order"] == null ? undefined : json["order"],
    formOrder: json["form_order"] == null ? undefined : json["form_order"],
    isDefault: json["is_default"] == null ? undefined : json["is_default"],
    isBattleOnly:
      json["is_battle_only"] == null ? undefined : json["is_battle_only"],
    isMega: json["is_mega"] == null ? undefined : json["is_mega"],
    formName: json["form_name"],
    pokemon: PokemonSummaryFromJSON(json["pokemon"]),
    sprites: PokemonFormDetailSpritesFromJSON(json["sprites"]),
    versionGroup: VersionGroupSummaryFromJSON(json["version_group"]),
    formNames: (json["form_names"] as Array<any>).map(
      PokemonFormDetailFormNamesInnerFromJSON
    ),
    names: (json["names"] as Array<any>).map(
      PokemonFormDetailFormNamesInnerFromJSON
    ),
    types: (json["types"] as Array<any>).map(PokemonDetailTypesInnerFromJSON),
  };
}

export function PokemonFormDetailToJSON(
  value?: Omit<PokemonFormDetail, "id"> | null
): any {
  if (value == null) {
    return value;
  }
  return {
    name: value["name"],
    order: value["order"],
    form_order: value["formOrder"],
    is_default: value["isDefault"],
    is_battle_only: value["isBattleOnly"],
    is_mega: value["isMega"],
    form_name: value["formName"],
    pokemon: PokemonSummaryToJSON(value["pokemon"]),
    sprites: PokemonFormDetailSpritesToJSON(value["sprites"]),
    version_group: VersionGroupSummaryToJSON(value["versionGroup"]),
    form_names: (value["formNames"] as Array<any>).map(
      PokemonFormDetailFormNamesInnerToJSON
    ),
    names: (value["names"] as Array<any>).map(
      PokemonFormDetailFormNamesInnerToJSON
    ),
    types: (value["types"] as Array<any>).map(PokemonDetailTypesInnerToJSON),
  };
}
