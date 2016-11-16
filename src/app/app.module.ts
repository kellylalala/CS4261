import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SelectRole } from '../pages/select-role/select-role';
import { BuyerSelectCourse } from '../pages/buyer-select-course/buyer-select-course';
import { BuyerSuggestedBooks } from '../pages/buyer-suggested-books/buyer-suggested-books';
import { BuyerBookList } from '../pages/buyer-book-list/buyer-book-list';
import { BuyerConfirmation } from '../pages/buyer-confirmation/buyer-confirmation';
import { BuyerRequestConfirmation } from '../pages/buyer-request-confirmation/buyer-request-confirmation';
import { SellerChooseFunctionality } from '../pages/seller-choose-functionality/seller-choose-functionality';
import { SellerHistory } from '../pages/seller-history/seller-history';
import { SellerClassInfo } from '../pages/seller-class-info/seller-class-info';
import { SellerSuggestedBooks } from '../pages/seller-suggested-books/seller-suggested-books';
import { SellerSetPrice } from '../pages/seller-set-price/seller-set-price';
import { SellerConfirmation } from '../pages/seller-confirmation/seller-confirmation';

@NgModule({
  declarations: [
    MyApp,
    SelectRole,
    BuyerSelectCourse,
    BuyerSuggestedBooks,
    BuyerBookList,
    BuyerConfirmation,
    BuyerRequestConfirmation,
    SellerChooseFunctionality,
    SellerHistory,
    SellerClassInfo,
    SellerSuggestedBooks,
    SellerSetPrice,
    SellerConfirmation
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SelectRole,
    BuyerSelectCourse,
    BuyerSuggestedBooks,
    BuyerBookList,
    BuyerConfirmation,
    BuyerRequestConfirmation,
    SellerChooseFunctionality,
    SellerHistory,
    SellerClassInfo,
    SellerSuggestedBooks,
    SellerSetPrice,
    SellerConfirmation
  ],
  providers: []
})
export class AppModule {}
