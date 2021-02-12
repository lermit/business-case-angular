export class Photo {

    private _id: number;
    private _showcase: boolean;
    private _exemple: string;

    constructor(showcase: boolean, exemple: string, id?: number) {
        
        if (typeof id === 'number') {
            this._id = id;
        }
            this._showcase = showcase;
            this._exemple = exemple;
        }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter showcase
     * @return {boolean}
     */
	public get showcase(): boolean {
		return this._showcase;
	}

    /**
     * Getter exemple
     * @return {string}
     */
	public get exemple(): string {
		return this._exemple;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter showcase
     * @param {boolean} value
     */
	public set showcase(value: boolean) {
		this._showcase = value;
	}

    /**
     * Setter exemple
     * @param {string} value
     */
	public set exemple(value: string) {
		this._exemple = value;
	}
    
    static fromJSON(data: any): Photo {
        return new Photo(
            data.showcase,
            data.exemple,
            data._id
        );
      }

      toJSON(): any {
        return {
          type: this.showcase,
          exemple: this.exemple,
        };
      }
    
    }