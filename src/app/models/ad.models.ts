import { Energy } from './energy.models';
import { Model } from './model.models';
import { Photo } from './photo.models';

export class Ad {

    private _id: number;
    private _reference: string;
    private _title: string;
    private _description: string;
    private _year: Date;
    private _mileage: number;
    private _price: number;
    private _CO2emission: number;
    private _serialNumber: string;
    private _category: string;
    private _seatingCapacity: number;
    private _doorsNumber: number;
    private _color: string;
    private _tapestry: string;
    private _hasAutomaticGearbox: boolean;
    private _consumption: number;
    private _horsepower: number;
    private _previousOwner: number;
    private _hasCooling: boolean;
    private _createdAt: Date;
    
    private _energy: Energy;
    private _model: Model;
    private _photos: Array<Photo>;

    constructor(reference: string, title: string, description: string, year: Date, mileage: number, 
                price: number, CO2emission: number, serialNumber: string, category: string, seatingCapacity: number, 
                doorsNumber: number, color: string, tapestry: string, hasAutomaticGearbox: boolean, consumption: number,
                horsepower: number, previousOwner: number, hasCooling: boolean, createdAt: Date, energy: Energy, model: Model,
                photos: Array<Photo>, id?: number) {
        
        if (typeof id === 'number') {
            this._id = id;
        }
        this._reference = reference;
        this._title = title;
        this._description = description;
        this._year = year;
        this._mileage = mileage;
        this._price = price;
        this._CO2emission = CO2emission;
        this._serialNumber = serialNumber;
        this._seatingCapacity = seatingCapacity;
        this._doorsNumber = doorsNumber;
        this._color = color;
        this._tapestry = tapestry;
        this._hasAutomaticGearbox = hasAutomaticGearbox;
        this._consumption = consumption;
        this._horsepower = horsepower;
        this._previousOwner = previousOwner;
        this._hasCooling = hasCooling;
        this._energy = energy;
        this._model = model;
        this._photos = photos;
    }


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter reference
     * @return {string}
     */
	public get reference(): string {
		return this._reference;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter year
     * @return {Date}
     */
	public get year(): Date {
		return this._year;
	}

    /**
     * Getter mileage
     * @return {number}
     */
	public get mileage(): number {
		return this._mileage;
	}

    /**
     * Getter price
     * @return {number}
     */
	public get price(): number {
		return this._price;
	}

    /**
     * Getter CO2emission
     * @return {number}
     */
	public get CO2emission(): number {
		return this._CO2emission;
	}

    /**
     * Getter serialNumber
     * @return {string}
     */
	public get serialNumber(): string {
		return this._serialNumber;
	}

    /**
     * Getter category
     * @return {string}
     */
	public get category(): string {
		return this._category;
	}

    /**
     * Getter seatingCapacity
     * @return {number}
     */
	public get seatingCapacity(): number {
		return this._seatingCapacity;
	}

    /**
     * Getter doorsNumber
     * @return {number}
     */
	public get doorsNumber(): number {
		return this._doorsNumber;
	}

    /**
     * Getter color
     * @return {string}
     */
	public get color(): string {
		return this._color;
	}

    /**
     * Getter tapestry
     * @return {string}
     */
	public get tapestry(): string {
		return this._tapestry;
	}

    /**
     * Getter hasAutomaticGearbox
     * @return {boolean}
     */
	public get hasAutomaticGearbox(): boolean {
		return this._hasAutomaticGearbox;
	}

    /**
     * Getter consumption
     * @return {number}
     */
	public get consumption(): number {
		return this._consumption;
	}

    /**
     * Getter horsepower
     * @return {number}
     */
	public get horsepower(): number {
		return this._horsepower;
	}

    /**
     * Getter previousOwner
     * @return {number}
     */
	public get previousOwner(): number {
		return this._previousOwner;
	}

    /**
     * Getter hasCooling
     * @return {boolean}
     */
	public get hasCooling(): boolean {
		return this._hasCooling;
	}

    /**
     * Getter createdAt
     * @return {Date}
     */
	public get createdAt(): Date {
		return this._createdAt;
	}

    /**
     * Getter energy
     * @return {Energy}
     */
	public get energy(): Energy {
		return this._energy;
	}

    /**
     * Getter model
     * @return {Model}
     */
	public get model(): Model {
		return this._model;
	}

    /**
     * Getter photos
     * @return {Array<Photos>}
     */
	public get photos(): Array<Photo> {
		return this._photos;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter reference
     * @param {string} value
     */
	public set reference(value: string) {
		this._reference = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter year
     * @param {Date} value
     */
	public set year(value: Date) {
		this._year = value;
	}

    /**
     * Setter mileage
     * @param {number} value
     */
	public set mileage(value: number) {
		this._mileage = value;
	}

    /**
     * Setter price
     * @param {number} value
     */
	public set price(value: number) {
		this._price = value;
	}

    /**
     * Setter CO2emission
     * @param {number} value
     */
	public set CO2emission(value: number) {
		this._CO2emission = value;
	}

    /**
     * Setter serialNumber
     * @param {string} value
     */
	public set serialNumber(value: string) {
		this._serialNumber = value;
	}

    /**
     * Setter category
     * @param {string} value
     */
	public set category(value: string) {
		this._category = value;
	}

    /**
     * Setter seatingCapacity
     * @param {number} value
     */
	public set seatingCapacity(value: number) {
		this._seatingCapacity = value;
	}

    /**
     * Setter doorsNumber
     * @param {number} value
     */
	public set doorsNumber(value: number) {
		this._doorsNumber = value;
	}

    /**
     * Setter color
     * @param {string} value
     */
	public set color(value: string) {
		this._color = value;
	}

    /**
     * Setter tapestry
     * @param {string} value
     */
	public set tapestry(value: string) {
		this._tapestry = value;
	}

    /**
     * Setter hasAutomaticGearbox
     * @param {boolean} value
     */
	public set hasAutomaticGearbox(value: boolean) {
		this._hasAutomaticGearbox = value;
	}

    /**
     * Setter consumption
     * @param {number} value
     */
	public set consumption(value: number) {
		this._consumption = value;
	}

    /**
     * Setter horsepower
     * @param {number} value
     */
	public set horsepower(value: number) {
		this._horsepower = value;
	}

    /**
     * Setter previousOwner
     * @param {number} value
     */
	public set previousOwner(value: number) {
		this._previousOwner = value;
	}

    /**
     * Setter hasCooling
     * @param {boolean} value
     */
	public set hasCooling(value: boolean) {
		this._hasCooling = value;
	}

    /**
     * Setter createdAt
     * @param {Date} value
     */
	public set createdAt(value: Date) {
		this._createdAt = value;
	}

    /**
     * Setter energy
     * @param {Energy} value
     */
	public set energy(value: Energy) {
		this._energy = value;
	}

    /**
     * Setter model
     * @param {Model} value
     */
	public set model(value: Model) {
		this._model = value;
	}

    /**
     * Setter photos
     * @param {Array<Photos>} value
     */
	public set photos(value: Array<Photo>) {
		this._photos = value;
    }
    
    static fromJSON(data: any): Ad {
        return new Ad(
            data.reference,
            data.title,
            data.description,
            data.year,
            data.mileage,
            data.price,
            data.CO2emission,
            data.serialNumber,
            data.category,
            data.seatingCapacity,
            data.doorsNumber,
            data.color,
            data.tapestry,
            data.hasAutomaticGearbox,
            data.consumption,
            data.horsepower,
            data.previousOwner,
            data.hasCooling,
            data.createdAt,
            Energy.fromJSON(data.energy),
            Model.fromJSON(data.model),
            data.photos.map(photo => Photo.fromJSON(photo)),
            data.id
        );
      }
    
      toJSON(): any {
        return {
          reference: this.reference,
          title: this.title,
          description: this.description,
          year: this.year,
          mileage: this.mileage,
          price: this.price,
          CO2emission: this.CO2emission,
          serialNumber: this.serialNumber,
          category: this.category,
          seatingCapacity: this.seatingCapacity,
          doorsNumber: this.doorsNumber,
          color: this.color,
          tapestry: this.tapestry,
          hasAutomaticGearbox: this.hasAutomaticGearbox,
          consumption: this.consumption,
          horsepower: this.horsepower,
          previousOwner: this.previousOwner,
          hasCooling: this.hasCooling,
          createdAt: this.createdAt,
          energy: this.energy.toJSON(),
          model: this.model.toJSON(),
          photos: this.photos.map(photo => photo.toJSON())
        };
      }
}