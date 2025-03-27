import { Slot } from "@radix-ui/react-slot";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import {
  FieldValues,
  UseFormProps,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";

import { cn } from "@lib/utils";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem as FormGroup,
  FormLabel,
  FormMessage,
  Form as FormProvider,
} from "@ui/_shardcn/form";

interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; // * 폼 아이템의 자식 요소
  name: string; // * 폼 필드의 이름
  description?: string; // 폼 아이템에 대한 설명
  label?: string; // 폼 아이템의 레이블
  className?: string; // 폼 아이템 css 스타일
  labelClassName?: string; // 레이블 css 스타일
  descriptionClassName?: string; // 설명 css 스타일
  errorClassName?: string; // 에러 메시지 css 스타일
  require?: boolean; // 필수 css
}

interface FormProps<T extends FieldValues> extends UseFormProps<T> {
  form: UseFormReturn<T>; // * form
  children: ReactNode | ReactNode[];
  onSubmit: (values: T) => void; // * 폼 제출을 처리하는 함수
  className?: string; // form css 스타일
}

const FormItem = (props: FormItemProps) => {
  const { control, setFocus } = useFormContext();
  const {
    name,
    label,
    require,
    className,
    labelClassName,
    description,
    descriptionClassName,
    errorClassName,
    children,
    ...rest
  } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormGroup
          className={cn("flex flex-col gap-2 space-y-0", className)}
          {...rest}
        >
          {label && (
            <FormLabel
              className={cn(
                " data-[error=true]:text-brand-primary",
                labelClassName
              )}
            >
              {label} {require && <span className="text-Error">*</span>}
            </FormLabel>
          )}
          {description && (
            <FormDescription
              className={`text-xs text-gray-400 ${descriptionClassName}`}
            >
              {description}
            </FormDescription>
          )}
          <FormControl onClick={() => setFocus(name)}>
            <Slot {...field}>{children}</Slot>
          </FormControl>
          <FormMessage
            className={cn("!text-brand-primary w-full pt-2", errorClassName)}
          />
        </FormGroup>
      )}
    />
  );
};

Form.Item = FormItem;

function Form<T extends FieldValues>(props: PropsWithChildren<FormProps<T>>) {
  const { form, onSubmit, className, children, ...rest } = props;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={className}
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
}

FormItem.displayName = "FormItem";

export default Form;
