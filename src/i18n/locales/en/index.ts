import { WidgetType } from '@/enums'

export default {
  action: {
    undo: 'стереть',
    redo: 'восстановить',
    flip: 'перевернуть',
    code: 'код',
    randomize: 'Случайно',
    download: 'Скачать',
    downloadMultiple: 'Сгенерировать много',
    setAvatar: 'Установить аватар в Битрикс24',
    copyCode: 'Скопировать',
    copied: 'Скопировано',
    downloading: 'Скачивается',
    close: 'Закрыть',
  },
  label: {
    wrapperShape: 'Формат фона',
    backgroundColor: 'Цвет фона',
    colors: 'цвета',
  },
  widgetType: {
    [WidgetType.Face]: 'Лицо',
    [WidgetType.Tops]: 'Голова',
    [WidgetType.Ear]: 'Уши',
    [WidgetType.Earrings]: 'Серьги',
    [WidgetType.Eyebrows]: 'Брови',
    [WidgetType.Eyes]: 'Глаза',
    [WidgetType.Nose]: 'Нос',
    [WidgetType.Glasses]: 'Очки',
    [WidgetType.Mouth]: 'Рот',
    [WidgetType.Beard]: 'Борода',
    [WidgetType.Clothes]: 'Одежда',
  },
  wrapperShape: {
    circle: 'Круг',
    square: 'Квадрат',
    squircle: 'Закругленный',
  },
  text: {
    codeModalTitle: 'Код',
    downloadTip: 'Длинное нажатие или Правый клик мыши для сохранения',
    downloadMultiple: 'Скачать всё',
    downloadingMultiple: 'Скачивание',
    downloadMultipleTip: 'Автоматически сгенерировано',
    regenerate: 'Заново сгенерировать',
  },
}
