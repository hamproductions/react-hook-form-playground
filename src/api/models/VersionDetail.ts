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
import type { VersionName } from "./VersionName";
import {
  VersionNameFromJSON,
  VersionNameFromJSONTyped,
  VersionNameToJSON,
} from "./VersionName";

/**
 * Should have a link to Version Group info but the Circular
 * dependency and compilation order fight eachother and I'm
 * not sure how to add anything other than a hyperlink
 * @export
 * @interface VersionDetail
 */
export interface VersionDetail {
  /**
   *
   * @type {number}
   * @memberof VersionDetail
   */
  readonly id: number;
  /**
   *
   * @type {string}
   * @memberof VersionDetail
   */
  name: string;
  /**
   *
   * @type {Array<VersionName>}
   * @memberof VersionDetail
   */
  names: Array<VersionName>;
  /**
   *
   * @type {VersionGroupSummary}
   * @memberof VersionDetail
   */
  versionGroup: VersionGroupSummary;
}

/**
 * Check if a given object implements the VersionDetail interface.
 */
export function instanceOfVersionDetail(value: object): value is VersionDetail {
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("names" in value) || value["names"] === undefined) return false;
  if (!("versionGroup" in value) || value["versionGroup"] === undefined)
    return false;
  return true;
}

export function VersionDetailFromJSON(json: any): VersionDetail {
  return VersionDetailFromJSONTyped(json, false);
}

export function VersionDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): VersionDetail {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    names: (json["names"] as Array<any>).map(VersionNameFromJSON),
    versionGroup: VersionGroupSummaryFromJSON(json["version_group"]),
  };
}

export function VersionDetailToJSON(
  value?: Omit<VersionDetail, "id"> | null
): any {
  if (value == null) {
    return value;
  }
  return {
    name: value["name"],
    names: (value["names"] as Array<any>).map(VersionNameToJSON),
    version_group: VersionGroupSummaryToJSON(value["versionGroup"]),
  };
}
