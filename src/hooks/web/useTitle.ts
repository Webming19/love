import { ref, watch } from 'vue';
import { isString } from '@/utils/is';
import { useAppStoreWithOut } from '@/store/modules/app';

const appStore = useAppStoreWithOut();

export function useTitle(newTitle?: string) {
  const title = ref(newTitle ? `${appStore.getTitle} - ${newTitle}` : appStore.getTitle);

  watch(
    title,
    (n, o) => {
      if (isString(n) && n !== o && document)
        document.title = n;
    },
    { immediate: true },
  );

  return title;
}
