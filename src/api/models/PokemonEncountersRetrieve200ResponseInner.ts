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

import type { PokemonEncountersRetrieve200ResponseInnerLocationArea } from "./PokemonEncountersRetrieve200ResponseInnerLocationArea";
import {
  PokemonEncountersRetrieve200ResponseInnerLocationAreaFromJSON,
  PokemonEncountersRetrieve200ResponseInnerLocationAreaFromJSONTyped,
  PokemonEncountersRetrieve200ResponseInnerLocationAreaToJSON,
} from "./PokemonEncountersRetrieve200ResponseInnerLocationArea";
import type { PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner } from "./PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner";
import {
  PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerFromJSON,
  PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerFromJSONTyped,
  PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerToJSON,
} from "./PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner";

/**
 *
 * @export
 * @interface PokemonEncountersRetrieve200ResponseInner
 */
export interface PokemonEncountersRetrieve200ResponseInner {
  /**
   *
   * @type {PokemonEncountersRetrieve200ResponseInnerLocationArea}
   * @memberof PokemonEncountersRetrieve200ResponseInner
   */
  locationArea: PokemonEncountersRetrieve200ResponseInnerLocationArea;
  /**
   *
   * @type {Array<PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner>}
   * @memberof PokemonEncountersRetrieve200ResponseInner
   */
  versionDetails: Array<PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner>;
}

/**
 * Check if a given object implements the PokemonEncountersRetrieve200ResponseInner interface.
 */
export function instanceOfPokemonEncountersRetrieve200ResponseInner(
  value: object
): value is PokemonEncountersRetrieve200ResponseInner {
  if (!("locationArea" in value) || value["locationArea"] === undefined)
    return false;
  if (!("versionDetails" in value) || value["versionDetails"] === undefined)
    return false;
  return true;
}

export function PokemonEncountersRetrieve200ResponseInnerFromJSON(
  json: any
): PokemonEncountersRetrieve200ResponseInner {
  return PokemonEncountersRetrieve200ResponseInnerFromJSONTyped(json, false);
}

export function PokemonEncountersRetrieve200ResponseInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PokemonEncountersRetrieve200ResponseInner {
  if (json == null) {
    return json;
  }
  return {
    locationArea: PokemonEncountersRetrieve200ResponseInnerLocationAreaFromJSON(
      json["location_area"]
    ),
    versionDetails: (json["version_details"] as Array<any>).map(
      PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerFromJSON
    ),
  };
}

export function PokemonEncountersRetrieve200ResponseInnerToJSON(
  value?: PokemonEncountersRetrieve200ResponseInner | null
): any {
  if (value == null) {
    return value;
  }
  return {
    location_area: PokemonEncountersRetrieve200ResponseInnerLocationAreaToJSON(
      value["locationArea"]
    ),
    version_details: (value["versionDetails"] as Array<any>).map(
      PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerToJSON
    ),
  };
}
