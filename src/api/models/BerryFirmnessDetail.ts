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

import type { BerryFirmnessName } from "./BerryFirmnessName";
import {
  BerryFirmnessNameFromJSON,
  BerryFirmnessNameFromJSONTyped,
  BerryFirmnessNameToJSON,
} from "./BerryFirmnessName";
import type { BerrySummary } from "./BerrySummary";
import {
  BerrySummaryFromJSON,
  BerrySummaryFromJSONTyped,
  BerrySummaryToJSON,
} from "./BerrySummary";

/**
 *
 * @export
 * @interface BerryFirmnessDetail
 */
export interface BerryFirmnessDetail {
  /**
   *
   * @type {number}
   * @memberof BerryFirmnessDetail
   */
  readonly id: number;
  /**
   *
   * @type {string}
   * @memberof BerryFirmnessDetail
   */
  name: string;
  /**
   *
   * @type {Array<BerrySummary>}
   * @memberof BerryFirmnessDetail
   */
  berries: Array<BerrySummary>;
  /**
   *
   * @type {Array<BerryFirmnessName>}
   * @memberof BerryFirmnessDetail
   */
  names: Array<BerryFirmnessName>;
}

/**
 * Check if a given object implements the BerryFirmnessDetail interface.
 */
export function instanceOfBerryFirmnessDetail(
  value: object
): value is BerryFirmnessDetail {
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("berries" in value) || value["berries"] === undefined) return false;
  if (!("names" in value) || value["names"] === undefined) return false;
  return true;
}

export function BerryFirmnessDetailFromJSON(json: any): BerryFirmnessDetail {
  return BerryFirmnessDetailFromJSONTyped(json, false);
}

export function BerryFirmnessDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BerryFirmnessDetail {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    berries: (json["berries"] as Array<any>).map(BerrySummaryFromJSON),
    names: (json["names"] as Array<any>).map(BerryFirmnessNameFromJSON),
  };
}

export function BerryFirmnessDetailToJSON(
  value?: Omit<BerryFirmnessDetail, "id"> | null
): any {
  if (value == null) {
    return value;
  }
  return {
    name: value["name"],
    berries: (value["berries"] as Array<any>).map(BerrySummaryToJSON),
    names: (value["names"] as Array<any>).map(BerryFirmnessNameToJSON),
  };
}
