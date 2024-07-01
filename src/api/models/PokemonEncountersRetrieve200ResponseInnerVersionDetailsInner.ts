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

import type { PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner } from "./PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner";
import {
  PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerFromJSON,
  PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerFromJSONTyped,
  PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerToJSON,
} from "./PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner";
import type { PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersion } from "./PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersion";
import {
  PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersionFromJSON,
  PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersionFromJSONTyped,
  PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersionToJSON,
} from "./PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersion";

/**
 *
 * @export
 * @interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner
 */
export interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner {
  /**
   *
   * @type {Array<PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner>}
   * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner
   */
  encounterDetails: Array<PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner>;
  /**
   *
   * @type {number}
   * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner
   */
  maxChance: number;
  /**
   *
   * @type {PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersion}
   * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner
   */
  version: PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersion;
}

/**
 * Check if a given object implements the PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner interface.
 */
export function instanceOfPokemonEncountersRetrieve200ResponseInnerVersionDetailsInner(
  value: object
): value is PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner {
  if (!("encounterDetails" in value) || value["encounterDetails"] === undefined)
    return false;
  if (!("maxChance" in value) || value["maxChance"] === undefined) return false;
  if (!("version" in value) || value["version"] === undefined) return false;
  return true;
}

export function PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerFromJSON(
  json: any
): PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner {
  return PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerFromJSONTyped(
    json,
    false
  );
}

export function PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner {
  if (json == null) {
    return json;
  }
  return {
    encounterDetails: (json["encounter_details"] as Array<any>).map(
      PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerFromJSON
    ),
    maxChance: json["max_chance"],
    version:
      PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersionFromJSON(
        json["version"]
      ),
  };
}

export function PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerToJSON(
  value?: PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner | null
): any {
  if (value == null) {
    return value;
  }
  return {
    encounter_details: (value["encounterDetails"] as Array<any>).map(
      PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerToJSON
    ),
    max_chance: value["maxChance"],
    version:
      PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersionToJSON(
        value["version"]
      ),
  };
}
