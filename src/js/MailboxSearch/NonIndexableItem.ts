﻿import {ItemId} from "../ComplexProperties/ItemId";
import {ItemIndexError} from "../Enumerations/ItemIndexError";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
//    public enum ItemIndexError
//    {
//        /// <summary>
//        /// None
//        /// </summary>
//        None,

//        /// <summary>
//        /// Generic error
//        /// </summary>
//        GenericError,

//        /// <summary>
//        /// Timeout
//        /// </summary>
//        Timeout,

//        /// <summary>
//        /// Stale event
//        /// </summary>
//        StaleEvent,

//        /// <summary>
//        /// Mailbox offline
//        /// </summary>
//        MailboxOffline,

//        /// <summary>
//        /// Too many attachments to index
//        /// </summary>
//        AttachmentLimitReached,

//        /// <summary>
//        /// Data is truncated
//        /// </summary>
//        MarsWriterTruncation,
//}
export class NonIndexableItem {
        ItemId: ItemId;
        ErrorCode: ItemIndexError;
        ErrorDescription: string;
        IsPartiallyIndexed: boolean;
        IsPermanentFailure: boolean;
        AttemptCount: number;
        LastAttemptTime: Date;
        AdditionalInfo: string;
        SortValue: string;
        LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItem { throw new Error("NonIndexableItem.ts - LoadFromXml : Not implemented."); }
    }


//}



