import { getFirstName } from '../helpers/nameOperations';

class GameInit {
  constructor() {
    let permission = false;
  }
  //micrafon kullanımı izni al
  permissionOkey = () => {
      //game Permission/microfon açma fonksiyonunu çalıştır
      //ardından random name seç
      let name = getFirstName('');
      return name;
  };
  //izin hayırsa GamePermision'da yer alan operasyonları yap

  init() {
    this.permissionOkey();
  }
}

export default GameInit;
