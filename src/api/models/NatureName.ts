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

import type { LanguageSummary } from "./LanguageSummary";
import {
  LanguageSummaryFromJSON,
  LanguageSummaryFromJSONTyped,
  LanguageSummaryToJSON,
} from "./LanguageSummary";

/**
 *
 * @export
 * @interface NatureName
 */
export interface NatureName {
  /**
   *
   * @type {string}
   * @memberof NatureName
   */
  name: string;
  /**
   *
   * @type {LanguageSummary}
   * @memberof NatureName
   */
  language: LanguageSummary;
}

/**
 * Check if a given object implements the NatureName interface.
 */
export function instanceOfNatureName(value: object): value is NatureName {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("language" in value) || value["language"] === undefined) return false;
  return true;
}

export function NatureNameFromJSON(json: any): NatureName {
  return NatureNameFromJSONTyped(json, false);
}

export function NatureNameFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): NatureName {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    language: LanguageSummaryFromJSON(json["language"]),
  };
}

export function NatureNameToJSON(value?: NatureName | null): any {
  if (value == null) {
    return value;
  }
  return {
    name: value["name"],
    language: LanguageSummaryToJSON(value["language"]),
  };
}
