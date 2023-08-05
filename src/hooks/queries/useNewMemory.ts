import { useMutation } from '@tanstack/react-query';
import { postMemory } from '../../apis/memory';
import type { NewMemory } from '../../types/memory';
import useModal from '../useModal';

const useNewMemory = () => {
  const { hide } = useModal();

  return useMutation<unknown, Error, NewMemory>({
    mutationFn: async (form) => {
      const response = await postMemory(form);
      if (response.status !== 201) throw new Error('추억 등록 실패');
    },

    onSuccess: () => {
      alert('추억 등록에 성공했어요');
      hide();
    },

    onError: (e) => {
      alert('추억 등록에 실패했어요');
    },

    retry: 1,
  });
};

export default useNewMemory;
