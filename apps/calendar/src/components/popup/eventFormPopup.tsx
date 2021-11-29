import { FunctionComponent, h } from 'preact';

import { CalendarSelector } from '@src/components/popup/calendarSelector';
import { ClosePopupButton } from '@src/components/popup/closePopupButton';
import { ConfirmPopupButton } from '@src/components/popup/confirmPopupButton';
import { DateSelector } from '@src/components/popup/dateSelector';
import { EventStateSelector } from '@src/components/popup/eventStateSelector';
import { LocationInputBox } from '@src/components/popup/locationInputBox';
import { PopupSection } from '@src/components/popup/popupSection';
import { TitleInputBox } from '@src/components/popup/titleInputBox';
import { useStore } from '@src/contexts/calendarStore';
import { cls } from '@src/helpers/css';
import { calendarSelector } from '@src/selectors';

import { EventFormPopupParam } from '@t/store';

const classNames = {
  popupContainer: cls('popup-container'),
};

export const EventFormPopup: FunctionComponent<EventFormPopupParam> = ({
  start,
  end,
  isAllday = false,
  eventState = 'Busy',
  close,
}) => {
  const { calendars } = useStore(calendarSelector);

  return (
    <div className={classNames.popupContainer}>
      {calendars?.length ? <CalendarSelector calendars={calendars} /> : <PopupSection />}
      <TitleInputBox />
      <LocationInputBox />
      <DateSelector start={start} end={end} isAllday={isAllday} />
      <EventStateSelector eventState={eventState} />
      <ClosePopupButton close={close} />
      <PopupSection>
        <ConfirmPopupButton />
      </PopupSection>
    </div>
  );
};