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

import type { PokedexName } from "./PokedexName";
import {
  PokedexNameFromJSON,
  PokedexNameFromJSONTyped,
  PokedexNameToJSON,
} from "./PokedexName";
import type { PokedexDescription } from "./PokedexDescription";
import {
  PokedexDescriptionFromJSON,
  PokedexDescriptionFromJSONTyped,
  PokedexDescriptionToJSON,
} from "./PokedexDescription";
import type { PokedexDetailPokemonEntriesInner } from "./PokedexDetailPokemonEntriesInner";
import {
  PokedexDetailPokemonEntriesInnerFromJSON,
  PokedexDetailPokemonEntriesInnerFromJSONTyped,
  PokedexDetailPokemonEntriesInnerToJSON,
} from "./PokedexDetailPokemonEntriesInner";
import type { AbilityDetailPokemonInnerPokemon } from "./AbilityDetailPokemonInnerPokemon";
import {
  AbilityDetailPokemonInnerPokemonFromJSON,
  AbilityDetailPokemonInnerPokemonFromJSONTyped,
  AbilityDetailPokemonInnerPokemonToJSON,
} from "./AbilityDetailPokemonInnerPokemon";
import type { RegionSummary } from "./RegionSummary";
import {
  RegionSummaryFromJSON,
  RegionSummaryFromJSONTyped,
  RegionSummaryToJSON,
} from "./RegionSummary";

/**
 *
 * @export
 * @interface PokedexDetail
 */
export interface PokedexDetail {
  /**
   *
   * @type {number}
   * @memberof PokedexDetail
   */
  readonly id: number;
  /**
   *
   * @type {string}
   * @memberof PokedexDetail
   */
  name: string;
  /**
   *
   * @type {boolean}
   * @memberof PokedexDetail
   */
  isMainSeries?: boolean;
  /**
   *
   * @type {Array<PokedexDescription>}
   * @memberof PokedexDetail
   */
  descriptions: Array<PokedexDescription>;
  /**
   *
   * @type {Array<PokedexName>}
   * @memberof PokedexDetail
   */
  names: Array<PokedexName>;
  /**
   *
   * @type {Array<PokedexDetailPokemonEntriesInner>}
   * @memberof PokedexDetail
   */
  pokemonEntries: Array<PokedexDetailPokemonEntriesInner>;
  /**
   *
   * @type {RegionSummary}
   * @memberof PokedexDetail
   */
  region: RegionSummary;
  /**
   *
   * @type {Array<AbilityDetailPokemonInnerPokemon>}
   * @memberof PokedexDetail
   */
  versionGroups: Array<AbilityDetailPokemonInnerPokemon>;
}

/**
 * Check if a given object implements the PokedexDetail interface.
 */
export function instanceOfPokedexDetail(value: object): value is PokedexDetail {
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("descriptions" in value) || value["descriptions"] === undefined)
    return false;
  if (!("names" in value) || value["names"] === undefined) return false;
  if (!("pokemonEntries" in value) || value["pokemonEntries"] === undefined)
    return false;
  if (!("region" in value) || value["region"] === undefined) return false;
  if (!("versionGroups" in value) || value["versionGroups"] === undefined)
    return false;
  return true;
}

export function PokedexDetailFromJSON(json: any): PokedexDetail {
  return PokedexDetailFromJSONTyped(json, false);
}

export function PokedexDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PokedexDetail {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    isMainSeries:
      json["is_main_series"] == null ? undefined : json["is_main_series"],
    descriptions: (json["descriptions"] as Array<any>).map(
      PokedexDescriptionFromJSON
    ),
    names: (json["names"] as Array<any>).map(PokedexNameFromJSON),
    pokemonEntries: (json["pokemon_entries"] as Array<any>).map(
      PokedexDetailPokemonEntriesInnerFromJSON
    ),
    region: RegionSummaryFromJSON(json["region"]),
    versionGroups: (json["version_groups"] as Array<any>).map(
      AbilityDetailPokemonInnerPokemonFromJSON
    ),
  };
}

export function PokedexDetailToJSON(
  value?: Omit<PokedexDetail, "id"> | null
): any {
  if (value == null) {
    return value;
  }
  return {
    name: value["name"],
    is_main_series: value["isMainSeries"],
    descriptions: (value["descriptions"] as Array<any>).map(
      PokedexDescriptionToJSON
    ),
    names: (value["names"] as Array<any>).map(PokedexNameToJSON),
    pokemon_entries: (value["pokemonEntries"] as Array<any>).map(
      PokedexDetailPokemonEntriesInnerToJSON
    ),
    region: RegionSummaryToJSON(value["region"]),
    version_groups: (value["versionGroups"] as Array<any>).map(
      AbilityDetailPokemonInnerPokemonToJSON
    ),
  };
}
