import { MessageModel } from '../../../core/model/message-model';

export interface SharedState {
  etag: string;
  showLoading: boolean;
  showDialog: boolean;
  errorMessage: MessageModel;
}
export const initialSharedState: SharedState = {
  etag: '',
  showLoading: false,
  showDialog: false,
  errorMessage: { message: '' },
};
