export class Energy {

    private _id: number;
    private _type: string;

    constructor(type: string, id?: number) {
        
        if (typeof id === 'number') {
            this._id = id;
        }
            this._type = type;
        }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}
    
    static fromJSON(data: any): Energy {
        return new Energy(
            data.type,
            data.id
        );
      }

      toJSON(): any {
        return {
          type: this.type,
        };
      }
    
    }