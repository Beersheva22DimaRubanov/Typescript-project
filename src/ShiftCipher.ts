import CipherDecipher from "./CipherDecipher";
import CipherType from "./model/CipherType";

export default class ShiftCipher implements CipherDecipher{
    
    cipher(text: string): CipherType {
        throw new Error("Method not implemented.");
    }
    decipher(cipher: CipherType): string {
        throw new Error("Method not implemented.");
    }
    updateKey(): void {
        throw new Error("Method not implemented.");
    }

}