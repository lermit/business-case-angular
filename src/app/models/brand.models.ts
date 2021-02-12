import { Model } from './model.models';
export class Brand {

    private _id: number;
    private _name: string;

    private _models: Array<Model>;

    constructor(name: string, models: Array<Model>, id?: number) {
        
        if (typeof id === 'number') {
            this._id = id;
        }
            this._name = name;
            this._models = models;
        }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter model
     * @return {Model}
     */
	public get models(): Array<Model> {
		return this._models;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter model
     * @param {Model} value
     */
	public set models(value: Array<Model>) {
		this._models = value;
	}
    
    static fromJSON(data: any): Brand {
        return new Brand(
            data.name,
            data.model.map(model => Model.fromJSON(model)),
            data.id
        );
      }

      toJSON(): any {
        return {
          type: this.name,
          model: this.models.map(model => model.toJSON())
        };
      }
    
    }