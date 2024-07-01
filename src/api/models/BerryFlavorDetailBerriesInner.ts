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

import type { BerryFlavorDetailBerriesInnerBerry } from "./BerryFlavorDetailBerriesInnerBerry";
import {
  BerryFlavorDetailBerriesInnerBerryFromJSON,
  BerryFlavorDetailBerriesInnerBerryFromJSONTyped,
  BerryFlavorDetailBerriesInnerBerryToJSON,
} from "./BerryFlavorDetailBerriesInnerBerry";

/**
 *
 * @export
 * @interface BerryFlavorDetailBerriesInner
 */
export interface BerryFlavorDetailBerriesInner {
  /**
   *
   * @type {number}
   * @memberof BerryFlavorDetailBerriesInner
   */
  potency: number;
  /**
   *
   * @type {BerryFlavorDetailBerriesInnerBerry}
   * @memberof BerryFlavorDetailBerriesInner
   */
  berry: BerryFlavorDetailBerriesInnerBerry;
}

/**
 * Check if a given object implements the BerryFlavorDetailBerriesInner interface.
 */
export function instanceOfBerryFlavorDetailBerriesInner(
  value: object
): value is BerryFlavorDetailBerriesInner {
  if (!("potency" in value) || value["potency"] === undefined) return false;
  if (!("berry" in value) || value["berry"] === undefined) return false;
  return true;
}

export function BerryFlavorDetailBerriesInnerFromJSON(
  json: any
): BerryFlavorDetailBerriesInner {
  return BerryFlavorDetailBerriesInnerFromJSONTyped(json, false);
}

export function BerryFlavorDetailBerriesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BerryFlavorDetailBerriesInner {
  if (json == null) {
    return json;
  }
  return {
    potency: json["potency"],
    berry: BerryFlavorDetailBerriesInnerBerryFromJSON(json["berry"]),
  };
}

export function BerryFlavorDetailBerriesInnerToJSON(
  value?: BerryFlavorDetailBerriesInner | null
): any {
  if (value == null) {
    return value;
  }
  return {
    potency: value["potency"],
    berry: BerryFlavorDetailBerriesInnerBerryToJSON(value["berry"]),
  };
}
