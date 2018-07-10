import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ClaimComponent } from './claim.component';
import { ClaimDetailComponent } from './claim-detail.component';
import { ClaimPopupComponent } from './claim-dialog.component';
import { ClaimDeletePopupComponent } from './claim-delete-dialog.component';

export const claimRoute: Routes = [
    {
        path: 'claim',
        component: ClaimComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Claims'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'claim/:id',
        component: ClaimDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Claims'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const claimPopupRoute: Routes = [
    {
        path: 'claim-new',
        component: ClaimPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Claims'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'claim/:id/edit',
        component: ClaimPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Claims'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'claim/:id/delete',
        component: ClaimDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Claims'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];